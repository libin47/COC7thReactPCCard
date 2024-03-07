"use client"
import styles from "./page.module.css";
import { useState, useEffect } from 'react'
import { work_options, skill_option, work_default, skill_default, weapon_options, weapon_default } from './data'
import {
  Form,
  Input,
  Button,
  TextArea,
  Picker,
  Grid,
  Radio,
  Space,
  Cascader,
  Tabs,
  Toast,
  SideBar,
  Modal
} from 'antd-mobile'



function get_fromlist(list: any, name: string, searchword = 'name', dname = "", searchdword = "") {
  for (var i = 0; i < list.length; i++) {
    if (dname) {
      if (list[i][searchdword] !== dname && list[i][searchword] === name) {
        return i
      }
    } else {
      if (list[i][searchword] === name) {
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

  const [pointAtt, setPointAtt]= useState<number>(500) 
  const [pointAttSave, setPointAttSave] = useState<number>(pointAtt) //属性点数量
  const [attType, setAttType] = useState<string>('gd')  // 属性选择方式
  const [luck, setLuck] = useState<number>(0) //幸运
  const [luckTime, setLuckTime] = useState<number>(5) //幸运随机次数
  const [attTime, setAttTime] = useState<number>(5) //属性随机次数
  const [attDice, setAttDice] = useState<number[][]>([])  //属性随机结果
  const [workname, setWorkname] = useState("")  //职业名称
  const [visibleWork, setVisibleWork] = useState(false) // 职业选择框可见
  const [visibleWeapon, setVisibleWeapon] = useState(false) // 武器选择框可见
  const [pickleVisible, setPickleVisible] = useState(false) // 技能选择框可见
  const [pickleData, setPickleData] = useState<any[]>([])   // 技能选择项
  const [pickleSubVisible, setPickleSubVisible] = useState(false) //子技能选择框可见
  const [pickleSubData, setPickleSubData] = useState<any[]>([]) // 子技能选择项
  const [pickleIndex, setPickleIndex] = useState(-1)  // 传递过来的技能索引
  const [activeKey, setActiveKey] = useState('本职')  // 技能导航key
  const [skill, setSkill] = useState<SkillModal[]>([]) // 技能表
  const [skillwork, setSkillwork] = useState<{ [key: string]: any }[]>([]) // 显示的本职技能
  const [moneyshow, setMoneyshow] = useState<number[]>([0, 100])
  const [pointSkills, setPointSkills] = useState<number[]>([0, 0])  // 总技能点数
  const [pointSkillUse, setPointSkillUse] = useState<number[]>([0, 0])  // 已用技能点数
  const [weaponUse, setWeaponUse] = useState<any[]>([])

  const [userid, setUserid] = useState("")
  const [groupid, setGroupid] = useState("")

  const [skillvalue, setSkillvalue] = useState<string[]>(["0", "0"]) // 显示内容

  const [pcInfo, setPcInfo] = useState<{ [key: string]: any }>({})



  const attlist = ['力量', '体质', '敏捷', '外貌', '意志', '体型', '教育', '智力']

  useEffect(() => {
    const queryStr = window.location.search.split("?")[1];
    var paramt = queryStr?queryStr.split("&"):[]
    var obj: { [key: string]: string } = {};
    for (let i = 0; i < paramt.length; i++) {
      let g = paramt[i].split("=");
      obj[g[0]] = g[1];
    }
    const CONFIG = obj
    const pointAtt_ = +CONFIG["point"]?+CONFIG["point"]:500
    const dicetime_ = +CONFIG["dicetime"]?+CONFIG["dicetime"]:5
    setLuckTime(dicetime_)
    setAttTime(dicetime_)
    setPointAtt(pointAtt_)
    setPointAttSave(pointAtt_)
    setGroupid(CONFIG["group"])
    setUserid(CONFIG["user"])
}, []);


  // 将表单更新到结构数据以备提交
  const check_and_set_pcinfo = function (value: any, allvalue: { [key: string]: any }) {
    // console.log(allvalue)
    const pcnew = pcInfo
    // 初始化
    if (!("attribute" in pcnew)) {
      pcnew["attribute"] = {}
    }
    if (!("story" in pcnew)) {
      pcnew["story"] = {}
    }
    if (!("item" in pcnew)) {
      pcnew["item"] = {}
    }
    // 属性
    if ("att_style" in allvalue) {
      if (allvalue["att_style"] === "gd") {
        // 购点
        for (var i = 0; i < attlist.length; i++) {
          pcnew["attribute"][attlist[i]] = allvalue[attlist[i]] ? +allvalue[attlist[i]] : 0
        }
        setPointAttSave(pointAtt - pcInfo["attribute"]["力量"] - pcInfo["attribute"]["敏捷"] - pcInfo["attribute"]["体型"] - pcInfo["attribute"]["意志"] - pcInfo["attribute"]["体质"] - pcInfo["attribute"]["教育"] - pcInfo["attribute"]["智力"] - pcInfo["attribute"]["外貌"])
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

      // pcnew['skill']["闪避"] = Math.floor(pcnew["attribute"]["敏捷"] / 2)
      // pcnew['skill']["母语"] = pcnew["attribute"]["教育"]

      if ("职业" in pcInfo && pcInfo["职业"]) {
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
    } else if ("形象描述" in allvalue) {
      if (allvalue["形象描述"]) {
        pcnew["story"]["形象描述"] = allvalue["形象描述"]
      }
      if (allvalue["思想信念"]) {
        pcnew["story"]["思想信念"] = allvalue["思想信念"]
      }
      if (allvalue["重要之人"]) {
        pcnew["story"]["重要之人"] = allvalue["重要之人"]
      }
      if (allvalue["意义非凡之地"]) {
        pcnew["story"]["意义非凡之地"] = allvalue["意义非凡之地"]
      }
      if (allvalue["宝贵之物"]) {
        pcnew["story"]["宝贵之物"] = allvalue["宝贵之物"]
      }
      if (allvalue["特质"]) {
        pcnew["story"]["特质"] = allvalue["特质"]
      }
      if (allvalue["精神状况"]) {
        pcnew["story"]["精神状况"] = allvalue["精神状况"]
      }
      if (allvalue["个人介绍"]) {
        pcnew["story"]["个人介绍"] = allvalue["个人介绍"]
      }
    } else if ("法术" in allvalue) {
      if (allvalue["法术"]) {
        pcnew["story"]["法术"] = allvalue["法术"]
      }
      if (allvalue["魔法物品与典籍"]) {
        pcnew["story"]["魔法物品与典籍"] = allvalue["魔法物品与典籍"]
      }
      if (allvalue["第三类接触"]) {
        pcnew["story"]["第三类接触"] = allvalue["第三类接触"]
      }
      if (allvalue["物品与装备"]) {
        pcnew["item"] = allvalue["物品与装备"]
      }
    }
    // console.log(pcnew)
    setPcInfo(pcnew)
  }

  const check_info = function (pc: any) {
    console.log(pc)
    var errortxt = ""
    if (!("attribute" in pc)) {
      return "请生成属性"
    }
    if (!("skill" in pc)) {
      return "请生成技能"
    }
    for (let i = 0; i < attlist.length; i++) {
      var att = attlist[i]
      if ("attribute" in pc && (pc["attribute"][att] > 95 || pc["attribute"][att] < 20)) {
        errortxt = "属性" + att + "应在20-95之间\n"
        return errortxt
      }
    }
    if (pointAttSave < 0) {
      errortxt += "属性超额使用！\n"
      return errortxt
    }
    // 2、技能
    for (let i = 0; i < pc['skill'].length; i++) {
      var sk = pc['skill'][i]
      if (sk["defaultPoint"] + sk["workPoint"] + sk["interPoint"] > 100) {
        errortxt = "技能" + sk["showName"] + "的加值总额应在100以内\n"
        return errortxt
      }
    }
    if (pointSkillUse[0] > pointSkills[0] || pointSkillUse[1] > pointSkills[1]) {
      errortxt += "技能点超额使用！\n"
      return errortxt
    }
    // 3、其他必需项
    if (!pc["职业"]) {
      errortxt = "职业必须填写！\n"
      return errortxt
    }
    if (!pc["name"]) {
      errortxt = "姓名必须填写！\n"
      return errortxt
    }
    if (!pc["attribute"]["幸运"]) {
      errortxt += "幸运必须填写！\n"
      return errortxt
    }
    return 'ok'
  }

  async function comit2net(pc:any) {
    const res = await fetch('/api/coc_new', {
      method: "POST", // http请求方法，GET/POST/DELETE/PUT等
      headers: { // 请求头配置
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({"user": userid, "group": groupid, "data":pc}), // 请求数据体
    })
    const rj = await res.json()
    if (rj.ok) {
      Modal.alert({
        content: '已成功提交！',
      })
    }
  }

  const commitFun = function () {
    console.log(666)
    const pc = pcInfo
    // 技能和武器赋值
    var sklist = []
    for (let i = 0; i < skill.length; i++) {
      if (skill[i].interPoint === 0 && skill[i].workPoint === 0 && !(skill[i].name in ["闪避", "母语"])) { }
      else { sklist.push(skill[i]) }
    }
    var wplist = []
    for (let i = 0; i < weaponUse.length; i++) {
      wplist.push(weaponUse[i])
    }
    pc['skill'] = sklist
    pc['weapon'] = wplist

    const errortxt = check_info(pc)

    if (errortxt !== "ok") {
      Toast.show({
        content: errortxt,
        afterClose: () => {
          console.log('after')
        },
      })
    } else {
      comit2net(pc)
    }
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
        var index_show = get_fromlist(skill_this, sw['showname'], 'showName')
        var index_name = get_fromlist(skill_this, sw['name'], 'name', sw['sub_name'], 'subName')
        if (index_show >= 0) {
          skill_this[index_show].work = true
          sw['index'] = index_show
          // console.log(skill_this[index_show])
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

      skill_this[get_fromlist(skill_this, "闪避", "name")].defaultPoint = Math.floor(pcInfo["attribute"]["敏捷"] / 2)
      skill_this[get_fromlist(skill_this, "母语", "name")].defaultPoint = Math.floor(pcInfo["attribute"]["教育"])
    }
    var money = myword["信用评级"]
    setMoneyshow(money)
    setSkillwork(skillWork)
    setSkill(skill_this)
    setWorkname(workname)
    setVisibleWork(false)
    // setPointSkillUse([0,0])
    check_and_set_pcinfo(null, { "职业": workname })
  }
  const setWeaponFun = function (value: any) {
    if (value.length !== 2) {
      return
    }
    var weaponName = value[1]
    var weapon = weapon_default[weaponName]
    var weaponlist = weaponUse
    weaponlist.push(weapon)
    setWeaponUse(weaponlist)
    setVisibleWeapon(false)
  }
  const delWeaponUse = function (value: number) {
    var weaponlist_ = weaponUse
    const weaponlist = weaponlist_.filter((_, i) => i !== value)
    setWeaponUse(weaponlist)
  }
  const setSkillSub = function (value: any, type = "work") {
    if (type === "work") {
      var skill_ = value[0]
      var index = -1
      for (var i = 0; i < skill.length; i++) {
        if (skill[i].name === skill_ && skill[i].work === false) {
          index = i
          break
        }
      }
      if (index < 0) {

      } else {
        var skillnew = skill
        var skillworknew = skillwork
        skillnew[index].work = true
        if ("sub_name" in skillnew[index]) {
          skillworknew[pickleIndex] = { index: index, "name": skillnew[index].name, "sub_name": skillnew[index].subName, "showname": skillnew[index].showName }
        } else {
          skillworknew[pickleIndex] = { index: index, "name": skillnew[index].name, "showname": skillnew[index].showName }
        }
        setSkill(skillnew)
        setSkillwork(skillworknew)
      }
    } else if (type === "sub") {
      var skill_ = value[0]
      var skillnew = skill
      skillnew[pickleIndex].subName = skill_
      console.log(skillnew)
      setSkill(skillnew)
    }

  }
  const startSetSkillSub = function (itemwork: { [key: string]: any; }, index: number) {
    var value = itemwork["select_list"]
    var data = []
    for (let i = 0; i < value.length; i++) {
      data.push({ label: value[i].name, value: value[i].name })
    }
    setPickleIndex(index)
    setPickleData([data])
    setPickleVisible(true)
  }
  // 子类型选择
  const startSetSkillSubAny = function (skillsubs: any, index: number) {
    var data = []
    for (let i = 0; i < skillsubs.length; i++) {
      data.push({ label: skillsubs[i], value: skillsubs[i] })
    }
    setPickleIndex(index)
    setPickleSubData([data])
    setPickleSubVisible(true)
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

  const setWorkPoint = function (val: string, index: number) {
    var skill_bak = skill
    if (val) {
      skill_bak[index].workPoint = +val
    } else {
      skill_bak[index].workPoint = 0
    }
    var pointuse_ = [0, 0]
    for (var i = 0; i < skill.length; i++) {
      pointuse_[0] += skill[i].workPoint
      pointuse_[1] += skill[i].interPoint
    }
    setPointSkillUse(pointuse_)
    setSkill(skill_bak)
  }
  const setIntePoint = function (val: string, index: number) {
    var skill_bak = skill
    if (val) {
      skill_bak[index].interPoint = +val
    } else {
      skill_bak[index].interPoint = 0
    } var pointuse_ = [0, 0]
    for (var i = 0; i < skill.length; i++) {
      pointuse_[0] += skill[i].workPoint
      pointuse_[1] += skill[i].interPoint
    }
    setPointSkillUse(pointuse_)
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
    <Cascader
      options={weapon_options}
      visible={visibleWeapon}
      onClose={() => {
        setVisibleWeapon(false)
      }}
      onSelect={setWeaponFun}
    />
    <Picker
      columns={pickleData}
      visible={pickleVisible}
      onClose={() => {
        setPickleVisible(false)
      }}
      onConfirm={v => {
        setSkillSub(v, "work")
      }}
    />
    <Picker
      columns={pickleSubData}
      visible={pickleSubVisible}
      onClose={() => {
        setPickleSubVisible(false)
      }}
      onConfirm={v => {
        setSkillSub(v, "sub")
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
            <Form.Item key={index} name={value} label={value} rules={[{ required: true }]} hidden={attType !== 'gd'}>
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
          {
            workname ? <div style={{ "fontSize": "12px" }}>
              <div>【{workname}】</div>
              <div>信用评级:{moneyshow[0]}-{moneyshow[1]}</div>
              <div>本职技能:{work_default[workname]["describe"]}</div>
            </div>
              : <></>
          }

        </Form>
      </Tabs.Tab>

      <Tabs.Tab title="技能加点" key="skill-key">
        <div className={styles.skillCount}>本职技能点:{pointSkills[0] - pointSkillUse[0]}   兴趣技能点:{pointSkills[1] - pointSkillUse[1]}</div>
        <div>
          {
            ("职业" in pcInfo && pcInfo["职业"]) ?
              <div className={styles.container} >
                <SideBar activeKey={activeKey} onChange={setActiveKey}>
                  {skill_option.map(item => (
                    <SideBar.Item key={item.name} title={item.name} />
                  ))}
                </SideBar>
                <div style={{ "width": "100%" }}>

                  {
                    skill_option.map(item => (
                      <div hidden={activeKey != item.name} key={item.name}>
                        <Grid columns={3} style={{ backgroundColor: "#EEEFFF" }}>
                          {
                            item.name === "本职" ?
                              skillwork?.map((itemwork, index) => (
                                itemwork["index"] >= 0 ?
                                  <>
                                    <Grid.Item onClick={(skill[itemwork["index"]].sub) ? (() => startSetSkillSubAny(skill[itemwork["index"]].subList, itemwork["index"])) : (() => { })}>
                                      <div className={styles.skilltext}>{skill[itemwork["index"]].sub ? (skill[itemwork["index"]].name + ":" + (skill[itemwork["index"]].subName ? skill[itemwork["index"]].subName : "未选择")) : skill[itemwork["index"]].showName}({skill[itemwork["index"]].defaultPoint})</div>
                                    </Grid.Item>
                                    <Grid.Item><div className={styles.skillinput} >
                                      <Input type="number" max={100} min={0} value={skill[itemwork["index"]].workPoint > 0 ? skill[itemwork["index"]].workPoint.toString() : ""} onChange={val => setWorkPoint(val, itemwork["index"])} />
                                    </div></Grid.Item>
                                    <Grid.Item><div className={styles.skillinput} >
                                      {skill[itemwork["index"]].levelup && skill[itemwork["index"]].name !== "信用评级" ?
                                        <Input type="number" max={100} min={0} value={skill[itemwork["index"]].interPoint > 0 ? skill[itemwork["index"]].interPoint.toString() : ""} onChange={val => setIntePoint(val, itemwork["index"])} /> : <></>}
                                    </div></Grid.Item>
                                  </>
                                  : <>
                                    <Grid.Item onClick={() => startSetSkillSub(itemwork, index)}><div className={styles.skilltext}>{"[点击选择]"}({"0"})</div></Grid.Item>
                                    <Grid.Item><div className={styles.skillinput} ></div></Grid.Item>
                                    <Grid.Item><div className={styles.skillinput} ></div></Grid.Item>
                                  </>

                              ))
                              : getSkillFromType(skill, item.sub).map((value, index) => (
                                <>
                                  <Grid.Item onClick={(skill[value.index].sub) ? (() => startSetSkillSubAny(skill[value.index].subList, value.index)) : (() => { })}><div className={styles.skilltext}>{skill[value.index].sub ? (skill[value.index].name + ":" + (skill[value.index].subName ? skill[value.index].subName : "未选择")) : skill[value.index].showName}({skill[value.index].defaultPoint})</div></Grid.Item>
                                  <Grid.Item><div className={styles.skillinput} >
                                    {skill[value.index].levelup ?
                                      <Input type="number" max={100} min={0} value={skill[value.index].workPoint > 0 ? skill[value.index].workPoint.toString() : ""} onChange={val => setWorkPoint(val, value.index)} /> : <></>}
                                  </div></Grid.Item>
                                  <Grid.Item><div className={styles.skillinput} >
                                    {skill[value.index].levelup && skill[value.index].name !== "信用评级" ?
                                      <Input type="number" max={100} min={0} value={skill[value.index].interPoint > 0 ? skill[value.index].interPoint.toString() : ""} onChange={val => setIntePoint(val, value.index)} /> : <></>}
                                  </div></Grid.Item>
                                </>
                              ))
                          }
                        </Grid></div>
                    ))
                  }

                </div>
              </div>
              :
              <div className={styles.skillCount} hidden={pcInfo["职业"]}> 请先生成属性与职业！ </div>
          }</div>

      </Tabs.Tab>
      <Tabs.Tab title="背景故事" key="story-key">
        <Form
          layout='horizontal'
          onValuesChange={check_and_set_pcinfo}
        >
          <Form.Header>背景故事</Form.Header>
          <Form.Item name='形象描述' label='形象描述' help='形象描述'>
            <TextArea
              placeholder='形象描述'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Item name='思想信念' label='思想信念' help='思想信念'>
            <TextArea
              placeholder='思想信念'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Item name='重要之人' label='重要之人' help='重要之人'>
            <TextArea
              placeholder='重要之人'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Item name='意义非凡之地' label='意义非凡之地' help='意义非凡之地'>
            <TextArea
              placeholder='意义非凡之地'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Item name='宝贵之物' label='宝贵之物' help='宝贵之物'>
            <TextArea
              placeholder='宝贵之物'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Item name='特质' label='特质' help='特质'>
            <TextArea
              placeholder='特质'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Item name='精神状况' label='精神状况' help='精神状况'>
            <TextArea
              placeholder='精神状况'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Item name='个人介绍' label='个人介绍' help='个人介绍'>
            <TextArea
              placeholder='个人介绍'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>

        </Form>
      </Tabs.Tab>
      <Tabs.Tab title="经历" key="item-key">
        <Form
          layout='horizontal'
          onValuesChange={check_and_set_pcinfo}
        >
          <Form.Header>武器</Form.Header>
          <Form.Item name='武器' label='武器' help='武器' layout="vertical">
            <div className={styles.weaponCon}>
              <div className={styles.weaponOne}>
                <div className={styles.weaponDel}></div><div className={styles.weaponName}>徒手</div><div className={styles.weaponValue}>1D3+DB</div>
              </div>
              {
                weaponUse.map((item, index) => (
                  <div className={styles.weaponOne} key={index}>
                    <div className={styles.weaponDel}><Button size='mini' color='danger' onClick={() => { delWeaponUse(index) }}>删除</Button> </div>
                    <div className={styles.weaponName}>{item["名称"]}</div>
                    <div className={styles.weaponValue}>{item["伤害"]},{item["贯穿"] ? "贯穿" : "非贯穿"}</div>
                  </div>
                ))
              }
              <div className={styles.weaponOne}>
                <Button block color='primary' size='large' onClick={() => { setVisibleWeapon(true) }}>新增</Button>
              </div>

            </div>
          </Form.Item>
          <Form.Header>物品与装备</Form.Header>
          <Form.Item name='物品与装备' label='物品与装备' help='物品与装备'>
            <TextArea
              placeholder='物品与装备'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Header>克苏鲁神话</Form.Header>
          <Form.Item name='魔法物品与典籍' label='魔法物品与典籍' help='魔法物品与典籍'>
            <TextArea
              placeholder='魔法物品与典籍'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Item name='法术' label='法术' help='法术'>
            <TextArea
              placeholder='法术'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
          <Form.Item name='第三类接触' label='第三类接触' help='第三类接触'>
            <TextArea
              placeholder='第三类接触'
              maxLength={100}
              rows={3}
              showCount
            />
          </Form.Item>
        </Form>

        <Button block color='success' size='large' onClick={commitFun}>创建角色卡</Button>
      </Tabs.Tab>

    </Tabs>

  </>)
}
