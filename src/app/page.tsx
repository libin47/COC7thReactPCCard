"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react'
import { work_options, skill_option, work_default, skill_default } from './data'
import {
  Form,
  Input,
  Button,
  Dialog,
  TextArea,
  DatePicker,
  Picker,
  Selector,
  Slider,
  Stepper,
  Switch,
  Grid,
  Radio,
  Space,
  Cascader,
  Tabs,
  SideBar
} from 'antd-mobile'
import { randomInt } from "crypto";


function get_fromlist(list: any, name: string, searchword = 'name', dname = "", searchdword = "") {
  for (var i = 0; i < list.length; i++) {
    if (dname) {
      if (list[i][searchdword] != dname && list[i][searchword] == name) {
        return i
      }
    } else {
      if (list[i][searchword] == name) {
        return i
      }
    }
  }
  return -1
}

function random(min: number, max: number) {
  var rd = max - min + 1
  return Math.floor(Math.random() * rd) + min
}

function dice(n: number, m: number) {
  var result = 0
  for (var i = 0; i < n; i++) {
    result += random(1, m)
  }
  return result
}

interface SkillModal {
  name: string,
  showName: string,
  sub: boolean,
  subName?: string,
  subList?: SkillModal[],
  work: boolean,
  defaultPoint: number,
  workPoint: number,
  interPoint: number,
  levelup: boolean,
}

export default function Home() {

  const pointAtt = 500

  const [pointAttSave, setPointAttSave] = useState<number>(pointAtt)
  const [attType, setAttType] = useState<string>('gd')
  const [luck, setLuck] = useState<number>(0)
  const [luckTime, setLuckTime] = useState<number>(5)
  const [attTime, setAttTime] = useState<number>(5)
  const [attDice, setAttDice] = useState<number[][]>([])
  const [workname, setWorkname] = useState("")
  const [visibleWork, setVisibleWork] = useState(false)
  const [pickleVisible, setPickleVisible] = useState(false)
  const [pickleIndex, setPickleIndex] = useState(-1)
  const [pickleData, setPickleData] = useState<any[]>([])
  const [activeKey, setActiveKey] = useState('本职')
  const [skill, setSkill] = useState<SkillModal[]>([]) // 技能表
  const [skillwork, setSkillwork] = useState<{ [key: string]: any }[]>([]) // 显示的本职技能
  const [moneyshow, setMoneyshow] = useState<number[]>([0, 100])
  const [pointSkills, setPointSkills] = useState<number[]>([0, 0])

  const [skillvalue, setSkillvalue] = useState<string[]>(["0", "0"]) // 显示内容

  const [pcInfo, setPcInfo] = useState<{ [key: string]: any }>({})



  const attlist = ['力量', '体质', '敏捷', '外貌', '意志', '体型', '教育', '智力']

  // 将表单更新到结构数据以备提交
  const check_and_set_pcinfo = function (value: any, allvalue: { [key: string]: any }) {
    console.log(allvalue)
    const pcnew = pcInfo
    // 初始化
    if (!("attribute" in pcnew)) {
      pcnew["attribute"] = {}
    }
    if (!("skill" in pcnew)) {
      pcnew["skill"] = {}
    }
    // 属性
    if ("att_style" in allvalue) {
      if (allvalue["att_style"] === "gd") {
        // 购点
        for (var i = 0; i < attlist.length; i++) {
          pcnew["attribute"][attlist[i]] = allvalue[attlist[i]] ? +allvalue[attlist[i]] : 0
        }
      } else {
        // 随机
        if ('att' in allvalue && allvalue['att'] >= 0 && attDice.length > 0) {
          var al = attDice[allvalue['att']]
          for (var i = 0; i < attlist.length; i++) {
            pcnew["attribute"][attlist[i]] = al[i]
          }
        } else {
          for (var i = 0; i < attlist.length; i++) {
            pcnew["attribute"][attlist[i]] = 0
          }
        }
      }
      // 衍生属性
      pcnew["HP_MAX"] = Math.floor((pcnew["attribute"]["体质"] + pcnew["attribute"]["体型"]) / 10)
      pcnew["HP"] = pcnew["HP_MAX"]
      pcnew["MP_MAX"] = Math.floor(pcnew["attribute"]["意志"] / 5)
      pcnew["MP"] = pcnew["MP_MAX"]
      pcnew["SAN_MAX"] = 99
      pcnew["SAN"] = Math.floor(pcnew["attribute"]["意志"])
      pcnew["MOV"] = (pcnew["attribute"]["力量"] < pcnew["attribute"]["体型"] && pcnew["attribute"]["敏捷"] < pcnew["attribute"]["体型"]) ? 7 : ((pcnew["attribute"]["力量"] >= pcnew["attribute"]["体型"] && pcnew["attribute"]["敏捷"] >= pcnew["attribute"]["体型"]) ? 9 : 8)
      var db = pcnew["attribute"]["力量"] + pcnew["attribute"]["体型"]
      pcnew["体格"] = db < 65 ? -2 : (db < 85 ? -1 : (db >= 205 ? Math.floor((db - 205) / 80) + 3 : Math.floor((db - 85) / 40)))
      pcnew["DB"] = pcnew['体格'] === -2 ? "-2" : (pcnew['体格'] === -1 ? -1 : (pcnew['体格'] === 0 ? 0 : (pcnew['体格'] === 1 ? "+1D4" : (pcnew['体格'] === 2 ? "+1D6" : "+" + (pcnew['体格'] - 1).toString() + "D6"))))

      pcnew['skill']["闪避"] = Math.floor(pcnew["attribute"]["敏捷"] / 2)
      pcnew['skill']["母语"] = pcnew["attribute"]["教育"]
      setPointAttSave(pointAtt - pcInfo["attribute"]["力量"] - pcInfo["attribute"]["敏捷"] - pcInfo["attribute"]["体型"] - pcInfo["attribute"]["意志"] - pcInfo["attribute"]["体质"] - pcInfo["attribute"]["教育"] - pcInfo["attribute"]["智力"] - pcInfo["attribute"]["外貌"])
      if("职业"in pcInfo && pcInfo["职业"]){
        setWorkFun(["", pcInfo["职业"]])
      }
    } else if ("幸运" in allvalue) {
      pcnew["attribute"]["幸运"] = allvalue["幸运"]
    } else if ("name" in allvalue) {
      pcnew["name"] = allvalue["name"] ? allvalue["name"] : ""
      pcnew["age"] = allvalue["age"] ? +allvalue["age"] : 0
      pcnew["sex"] = allvalue["sex"] ? +allvalue["sex"] : 0
      pcnew["time"] = allvalue["time"] ? allvalue["time"] : ""
      pcnew["whereborn"] = allvalue["whereborn"] ? allvalue["whereborn"] : ""
      pcnew["wherelive"] = allvalue["wherelive"] ? allvalue["wherelive"] : ""
    } else if ("职业" in allvalue) {
      pcnew["职业"] = allvalue["职业"]
    }
    console.log(pcnew)
    setPcInfo(pcnew)
  }

  const setAttFun = function (value: any) {
    setAttType(value)
  }

  const addAttDice = function () {
    var d = [dice(3, 6) * 5, dice(3, 6) * 5, dice(3, 6) * 5, dice(3, 6) * 5, dice(3, 6) * 5, dice(2, 6) * 5 + 30, dice(2, 6) * 5 + 30, dice(2, 6) * 5 + 30]
    var attdice_ = [...attDice]
    attdice_.push(d)
    var t = attTime - 1
    setAttDice(attdice_)
    setAttTime(t)
  }

  const setLuckFun = function () {
    if (luckTime <= 0) { return }
    var luck_ = dice(3, 6) * 5
    check_and_set_pcinfo(null, { "幸运": luck_ })
    setLuck(luck_)
    setLuckTime(luckTime - 1)
  }
  const setWorkFun = function (value: any) {
    // 选一个时候不管，只有选具体的才更新
    if (value.length < 2) {
      return
    }
    // 读取所有职业，生成清单
    var skill_this: SkillModal[] = []
    for (var i = 0; i < skill_option.length; i++) {
      var sk = skill_option[i]
      for (let j = 0; j < sk.sub.length; j++) {
        var skillname = sk.sub[j]
        var _skill: SkillModal = {
          name: skill_default[skillname].name,
          sub: skill_default[skillname].sub,
          subName: "",
          subList: skill_default[skillname].sub_name,
          showName: skill_default[skillname].name,
          work: false,
          defaultPoint: skill_default[skillname].default,
          workPoint: 0,
          interPoint: 0,
          levelup: skill_default[skillname].levelup,
        }
        skill_this.push(_skill)
      }
    }
    // 根据职业，生成本职职业，并处理职业清单
    var skillWork = []
    var workname: string = value[1]
    var myword = work_default[workname]
    var myskill = myword["skill"]
    for (var i = 0; i < myskill.length; i++) {
      // 情况一：写明了的技能
      if ('name' in myskill[i]) {
        var sw: { [key: string]: any } = {}
        sw['name'] = myskill[i].name
        // 分别处理带子类型和不带子类型的可能
        if ('sub_name' in myskill[i]) {
          sw['sub_name'] = myskill[i].sub_name
          sw['showname'] = myskill[i].name + ":" + myskill[i].sub_name
        } else {
          sw['showname'] = myskill[i].name
        }
        var index_show = get_fromlist(skill_this, sw['showname'], 'showname')
        var index_name = get_fromlist(skill_this, sw['name'], 'name', sw['sub_name'], 'subName')
        if (index_show >= 0) {
          skill_this[index_show].work = true
          sw['index'] = index_show
        } else if (index_name >= 0) {
          skill_this[index_name] = {
            name: sw['name'],
            sub: false,
            subName: sw['sub_name'],
            showName: sw['showname'],
            work: true,
            defaultPoint: skill_this[index_name].defaultPoint,
            workPoint: 0,
            interPoint: 0,
            levelup: skill_this[index_name].levelup,
          }
          sw['index'] = index_name
        } else {
          console.log("意料之外的初始技能！", sw['showname'])
        }
        skillWork.push(sw)
      } else {
        // 情况二，多选
        var skillall = []
        for (let key in skill_default) {
          if (get_fromlist(skillWork, key, 'showname') < 0 && skill_default[key].levelup) {
            skillall.push({ 'name': skill_default[key].name })
          }
        }
        console.log(skillall)
        for (let j = 0; j < myskill[i].number; j++) {
          var sw: { [key: string]: any } = {}
          sw['select_list'] = myskill[i].area == "list" ? myskill[i].list : skillall
          sw['index'] = -1
          skillWork.push(sw)
        }
      }
    }
    if (pcInfo["attribute"]) {
      var pointswork = 0
      for (var i = 0; i < myword['workPoints'].length; i++) {
        pointswork += myword['workPoints'][i]['att'].length == 1 ? pcInfo["attribute"][myword['workPoints'][i]['att'][0]] * myword['workPoints'][i]["scale"] : Math.max(pcInfo["attribute"][myword['workPoints'][i]['att'][0]], pcInfo["attribute"][myword['workPoints'][i]['att'][1]]) * myword['workPoints'][i]["scale"]
      }
      setPointSkills([pointswork, pcInfo["attribute"]["智力"] * 2])

      skill_this[get_fromlist(skill_this, "闪避", "name")].defaultPoint =Math.floor(pcInfo["attribute"]["敏捷"]/2)
      skill_this[get_fromlist(skill_this, "母语", "name")].defaultPoint =Math.floor(pcInfo["attribute"]["教育"])
    }
    var money = myword["信用评级"]
    setMoneyshow(money)
    setSkillwork(skillWork)
    setSkill(skill_this)
    setWorkname(workname)
    setVisibleWork(false)

    check_and_set_pcinfo(null, { "职业": workname })
  }

  const setSkillSub = function (value:any){
    var skill_ = value[0]
    var index = -1
    for(var i=0;i<skill.length;i++){
      if(skill[i].name===skill_ && skill[i].work === false){
        index = i
        break
      }
    }
    if (index<0){

    } else {
      var skillnew = skill
      var skillworknew = skillwork
      skillnew[index].work = true
      if("sub_name" in skillnew[index]){
        skillworknew[pickleIndex] = {index: index, "name": skillnew[index].name, "sub_name": skillnew[index].subName, "showname": skillnew[index].showName}
      } else {
        skillworknew[pickleIndex] = {index: index, "name": skillnew[index].name, "showname": skillnew[index].showName}
      }
    setSkill(skillnew)
    setSkillwork(skillworknew)
    }
  }
  const startSetSkillSub = function (itemwork:{ [key: string]: any; }, index:number){
    var value = itemwork["select_list"]
    var data = []
    for(let i=0;i<value.length;i++){
      data.push({ label: value[i].name, value: value[i].name })
    }
    setPickleIndex(index)
    setPickleData([data])
    setPickleVisible(true)
  }

  const getSkillFromType = function (skill: SkillModal[], type: string[]) {
    var skillResult = []
    for (var i = 0; i < skill.length; i++) {
      if (type.indexOf(skill[i].name) >= 0) {
        skillResult.push({ skillInfo: skill[i], index: i })
      }
    }
    return skillResult
  }
  // function Bottom ({ keyvalue, setValue } : { keyvalue:string, setValue:(key: string) => void })
  const XMLSkilShow = () => {
    return (
      skill_option.map(item => (
        <div hidden={activeKey != item.name}>
          <Grid columns={3} style={{ backgroundColor: "lightblue" }}>
            {
              item.name === "本职" ?
                skillwork?.map((itemwork, index) => (
                  itemwork["index"] >= 0 ?
                    <>
                      <Grid.Item><div>{itemwork["showname"]}({skill[itemwork["index"]]?.defaultPoint})</div></Grid.Item>
                      <Grid.Item><Input type="number" max={100} min={0} defaultValue={skill[itemwork["index"]].workPoint > 0 ? skill[itemwork["index"]].workPoint.toString() : ""} onChange={val => setWorkPoint(val, itemwork["index"])} /></Grid.Item>
                      <Grid.Item><Input type="number" max={100} min={0} defaultValue={skill[itemwork["index"]].interPoint > 0 ? skill[itemwork["index"]].interPoint.toString() : ""} onChange={val => setIntePoint(val, itemwork["index"])} /></Grid.Item>
                    </>
                    : <>
                      <Grid.Item onClick={()=>startSetSkillSub(itemwork, index)}><div>{"点击选择"}({"0"})</div></Grid.Item>
                      <Grid.Item><Input disabled defaultValue={"0"} onChange={val => { }} /></Grid.Item>
                      <Grid.Item><Input disabled defaultValue={"0"} onChange={val => { }} /></Grid.Item>
                    </>

                ))
                : getSkillFromType(skill, item.sub).map((value, index) => (
                  <>
                    <Grid.Item><div>{skill[value.index].sub ? (skill[value.index].name + ":" + (skill[value.index].subName ? skill[value.index].subName : "未选择")) : skill[value.index].showName}({skill[value.index].defaultPoint})</div></Grid.Item>
                    <Grid.Item><Input type="number" max={100} min={0} defaultValue={skill[value.index].workPoint > 0 ? skill[value.index].workPoint.toString() : ""} onChange={val => setWorkPoint(val, value.index)} /></Grid.Item>
                    <Grid.Item><Input type="number" max={100} min={0} defaultValue={skill[value.index].interPoint > 0 ? skill[value.index].interPoint.toString() : ""} onChange={val => setIntePoint(val, value.index)} /></Grid.Item>
                  </>
                ))
            }
          </Grid></div>
      ))
    )
  }

  const setWorkPoint = function (val: string, index: number) {
    var skill_bak = skill
    if (val) {
      skill_bak[index].workPoint = +val
    } else {
      skill_bak[index].workPoint = 0
    }
    setSkill(skill_bak)
  }
  const setIntePoint = function (val: string, index: number) {
    var skill_bak = skill
    if (val) {
      skill_bak[index].interPoint = +val
    } else {
      skill_bak[index].interPoint = 0
    }
    setSkill(skill_bak)
  }

  return (<>

    <Cascader
      options={work_options}
      visible={visibleWork}
      onClose={() => {
        setVisibleWork(false)
      }}
      onSelect={setWorkFun}
    />
    <Picker
        columns={pickleData}
        visible={pickleVisible}
        onClose={() => {
          setPickleVisible(false)
        }}
        onConfirm={v => {
          setSkillSub(v)
        }}
      />
    <Tabs>
      <Tabs.Tab title="基础属性" key="att-key">
        <Form
          layout='horizontal'
          onValuesChange={check_and_set_pcinfo}
          initialValues={{ "att_style": "gd" }}
        >
          <Form.Header>基本属性</Form.Header>
          <Form.Item name='att_style' label='属性方式'>
            <Radio.Group onChange={setAttFun}>
              <Space direction='vertical'>
                <Radio value='gd'>购点()</Radio>
                <Radio value='sj'>随机()</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          {
            attType == 'gd' ?
              <Form.Header>属性点剩余:{pointAttSave}</Form.Header>
              :
              <Form.Header>请选择你想要的属性</Form.Header>
          }

          <Form.Item name='att' label='属性选择' hidden={attType === 'gd'}>
            <Radio.Group>
              <Space direction='vertical'>
                {
                  attDice.map((value, index) => (
                    <Radio value={index} key={index}>
                      [{value.reduce((accumulator, current) => { return accumulator + current; }, 0)}]力量{value[0]},体质{value[1]}, 敏捷{value[2]}, 外貌{value[3]}, 意志{value[4]}, 体型{value[5]}, 教育{value[6]}, 智力{value[7]}
                    </Radio>))
                }
              </Space>
            </Radio.Group>
          </Form.Item>


          {attlist.map((value, index) => (
            <Form.Item name={value} label={value} rules={[{ required: true }]} hidden={attType !== 'gd'}>
              <Input placeholder={value} />
            </Form.Item>))}

          {attType === 'gd' ? <></> :
            <Button onClick={addAttDice} disabled={attTime <= 0}>生成(剩余{attTime}次)</Button>}


          <Form.Header>幸运</Form.Header>
          <Form.Item label='幸运' extra={<Button onClick={setLuckFun} disabled={luckTime <= 0}>随机(剩余{luckTime}次)</Button>}>
            <Input placeholder='请输入' readOnly value={luck.toString()} />
          </Form.Item>
        </Form>
      </Tabs.Tab>

      <Tabs.Tab title="角色信息" key="info-key">
        <Form
          layout='horizontal'
          onValuesChange={check_and_set_pcinfo}
        >
          <Form.Header>角色信息</Form.Header>
          <Form.Item name='name' label='姓名' rules={[{ required: true, message: '姓名不能为空' }]}>
            <Input onChange={console.log} placeholder='请输入姓名' />
          </Form.Item>
          <Form.Item name='sex' label='性别' >
            <Radio.Group defaultValue='1'>
              <Radio value='1'>男</Radio>
              <Radio value='2'>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name='age' label='年龄' >
            <Input placeholder='年龄' />
          </Form.Item>
          <Form.Item name='time' label='时代' >
            <Input placeholder='时代' />
          </Form.Item>
          <Form.Item name='wherelive' label='住地' >
            <Input placeholder='住地' />
          </Form.Item>
          <Form.Item name='whereborn' label='故乡' >
            <Input placeholder='故乡' />
          </Form.Item>
          <Form.Item label='职业' rules={[{ required: true, message: '职业必须选择' }]} onClick={() => setVisibleWork(true)} >
            <Input placeholder="请选择" value={workname} readOnly />
          </Form.Item>
        </Form>
      </Tabs.Tab>

      <Tabs.Tab title="技能加点" key="skill-key">
        <div className={styles.skillCount}>本职技能点:{pointSkills[0]}   兴趣技能点:{pointSkills[1]}</div>
        {
          ("职业" in pcInfo && pcInfo["职业"])?
          <div className={styles.container} >
          <SideBar activeKey={activeKey} onChange={setActiveKey}>
            {skill_option.map(item => (
              <SideBar.Item key={item.name} title={item.name} />
            ))}
          </SideBar>
          <div style={{ "width": "100%" }}>

            <XMLSkilShow />

          </div>
        </div>
        :

        <div className={styles.skillCount} hidden={pcInfo["职业"]}> 请先生成属性与职业！ </div>
        }

      </Tabs.Tab>
    </Tabs>
  </>)
}
