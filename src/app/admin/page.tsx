"use client"
import styles from "./page.module.css";
import { useState, useEffect } from 'react'
import { InfoModal, SkillModal, IModal } from "../card";
import Home  from '../page'
import { ATT_Type } from '../data'
import {
  Form,
  Input,
  Button,
  Collapse,
  CollapseProps,
  Alert,
  Row,
  Grid,
  Col,
  Modal,
  Divider,
  Progress,
  InputNumber,
  Switch,
  List,
  Select,
  Flex
} from 'antd'
import { api_url } from "../config"

interface GroupModal {
  _id: string,
  status: boolean,
  Gaming: string,
  group_card: InfoModal[],
  config: {point: number, dicetime:number, succnum?:number, failnum?:number},
  card: { [key: string]: InfoModal }
}

function CardEdit({ card }: { card: InfoModal }) {
  const [info, setInfo] = useState<InfoModal>(card)
  const [skillindex, setSkillindex] = useState<number>(-1)
  const [weaponindex, setWeaponindex] = useState<number>(-1)

  const [skill, setSkill] = useState<SkillModal>()
  const attlist: ATT_Type[] = ['力量', '体质', '敏捷', '外貌', '意志', '体型', '教育', '智力', "幸运"]




  const setname = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const pc: InfoModal = { ...info }
    pc.职业 = e.target.value
    setInfo(pc)
  }
  const setinfo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
    const pc: InfoModal = { ...info }
    if (name === "age") { info.info.age = +e.target.value }
    else if (name === "time") { info.info.time = e.target.value }
    else if (name === "whereborn") { info.info.whereborn = e.target.value }
    else if (name === "wherelive") { info.info.wherelive = e.target.value }
    else if (name === "DB") { info.attex.DB = e.target.value }
    else if (name === "个人介绍") { info.story.个人介绍 = e.target.value }
    else if (name === "形象描述") { info.story.形象描述 = e.target.value }
    else if (name === "思想信念") { info.story.思想信念 = e.target.value }
    else if (name === "重要之人") { info.story.重要之人 = e.target.value }
    else if (name === "意义非凡之地") { info.story.意义非凡之地 = e.target.value }
    else if (name === "宝贵之物") { info.story.宝贵之物 = e.target.value }
    else if (name === "特质") { info.story.特质 = e.target.value }
    else if (name === "精神状况") { info.story.精神状况 = e.target.value }
    else if (name === "魔法物品与典籍") { info.story.魔法物品与典籍 = e.target.value }
    else if (name === "法术") { info.story.法术 = e.target.value }
    else if (name === "第三类接触") { info.story.第三类接触 = e.target.value }
    else if (name === "生活水平") { info.CR.CR = e.target.value }
    else if (name === "消费水平") { info.CR.消费水平 = e.target.value }
    else if (name === "现金") { info.CR.现金 = e.target.value }
    else if (name === "资产") { info.CR.资产 = e.target.value }
    else if (name === "随身物品") { info.item = e.target.value }
    else if (name === "名称") { info.weapon[weaponindex].名称 = e.target.value }
    else if (name === "伤害") { info.weapon[weaponindex].伤害 = e.target.value }
    // setInfo(pc)
  }
  const setsubskill = (e: string) => {
    info.skill[skillindex].subName = e
    info.skill[skillindex].showName = info.skill[skillindex].name + ":" + info.skill[skillindex].subName
  }

  const setSkillnum = (e: number | null, name: string) => {
    if (e) {
      if (name === "work") { info.skill[skillindex].workPoint = e }
      else if (name === "inter") { info.skill[skillindex].interPoint = e }
      else if (name === "ensure") { info.skill[skillindex].ensurePoint = e }
    }
  }

  const setnum = (e: number | null, name: string) => {
    if (e) {
      const pc: InfoModal = { ...info }
      if (name === "HP") { info.attex.HP = e }
      else if (name === "HP_MAX") { info.attex.HP_MAX = e }
      else if (name === "MP") { info.attex.MP = e }
      else if (name === "MP_MAX") { info.attex.MP_MAX = e }
      else if (name === "SAN") { info.attex.SAN = e }
      else if (name === "SAN_MAX") { info.attex.SAN_MAX = e }
      else if (name === "体格") { info.attex.体格 = e }
      else if (name === "MOV") { info.attex.MOV = e }
      else if (name === "故障率") { info.weapon[weaponindex].故障率 = e }
      else if (name === "装弹量") { info.weapon[weaponindex].装弹量 = e }
      else if (name === "力量") { info.attribute.力量 = e }
      else if (name === "体型") { info.attribute.体型 = e }
      else if (name === "体质") { info.attribute.体质 = e }
      else if (name === "外貌") { info.attribute.外貌 = e }
      else if (name === "幸运") { info.attribute.幸运 = e }
      else if (name === "意志") { info.attribute.意志 = e }
      else if (name === "敏捷") { info.attribute.敏捷 = e }
      else if (name === "教育") { info.attribute.教育 = e }
      else if (name === "智力") { info.attribute.智力 = e }


      // setInfo(pc)
    }

  }

  const setbool = (e: boolean | null, name: string) => {
    if (e) {
      if (name === "贯穿") { info.weapon[weaponindex].贯穿 = e }
    }

  }

  const handleOk = () => {
    const pc: InfoModal = { ...info }
    setSkillindex(-1)
    setInfo(pc)
  }
  const handleWOk = () => {
    const pc: InfoModal = { ...info }
    setWeaponindex(-1)
    setInfo(pc)
  }
  const handleCancel = () => {
    setSkillindex(-1)
  }
  const handleWCancel = () => {
    setWeaponindex(-1)
  }

  function SkillInput() {
    const odata = []
    if (skillindex >= 0) {
      if (info.skill[skillindex].sub) {
        const l = info.skill[skillindex].subList
        if (l) {
          for (var i = 0; i < l.length; i++) {
            odata.push({ value: l[i], label: l[i] })
          }
        }
      }
    }
    return (
      skillindex >= 0 ?
        <Modal
          title={info.skill[skillindex].showName + "【" + (info.skill[skillindex].defaultPoint + info.skill[skillindex].workPoint + info.skill[skillindex].interPoint + info.skill[skillindex].ensurePoint).toString() + "】"}
          open={skillindex >= 0}
          onOk={handleOk}
          onCancel={handleCancel}>
          {
            info.skill[skillindex].sub ?
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                技能的详细种类
                <Select
                  defaultValue={info.skill[skillindex].subName}
                  style={{ width: "80%" }}
                  onChange={(e) => setsubskill(e)}
                  options={odata}

                />
                <Divider />
              </div>
              : <></>
          }
          <Flex wrap="wrap" gap="small" justify={'center'}>

            <InputNumber className={styles.skillinput} readOnly addonBefore={"默认:"} defaultValue={info.skill[skillindex].defaultPoint} />
            {
              info.skill[skillindex].levelup ?
                <>
                  <InputNumber className={styles.skillinput} addonBefore={"职业加点:"} defaultValue={info.skill[skillindex].workPoint} onChange={(e) => setSkillnum(e, "work")} />
                  <InputNumber className={styles.skillinput} addonBefore={"兴趣加点:"} defaultValue={info.skill[skillindex].interPoint} onChange={(e) => setSkillnum(e, "inter")} />
                </>
                : <></>
            }
            <InputNumber className={styles.skillinput} addonBefore={"成长:"} defaultValue={info.skill[skillindex].ensurePoint} onChange={(e) => setSkillnum(e, "ensure")} />
          </Flex>
        </Modal>
        : <></>
    )
  }

  function AttPage() {
    return (
      <div className={styles.attinfo}>
        <div className={styles.attbase}>
          <InputNumber addonBefore={"HP:"} defaultValue={info.attex.HP} onChange={(e) => setnum(e, "HP")} />
          <InputNumber addonBefore={"最大HP:"} defaultValue={info.attex.HP_MAX} onChange={(e) => setnum(e, "HP_MAX")} />
        </div>
        <Progress percent={info.attex.HP / info.attex.HP_MAX * 100} showInfo={false} />
        <div className={styles.attbase}>
          <InputNumber addonBefore={"MP:"} defaultValue={info.attex.MP} onChange={(e) => setnum(e, "MP")} />
          <InputNumber addonBefore={"最大MP:"} defaultValue={info.attex.MP_MAX} onChange={(e) => setnum(e, "MP_MAX")} />
        </div>
        <Progress percent={info.attex.MP / info.attex.MP_MAX * 100} showInfo={false} />
        <div className={styles.attbase}>
          <InputNumber addonBefore={"SAN:"} defaultValue={info.attex.SAN} onChange={(e) => setnum(e, "SAN")} />
          <InputNumber addonBefore={"最大SAN:"} defaultValue={info.attex.SAN_MAX} onChange={(e) => setnum(e, "SAN_MAX")} />
        </div>
        <Progress percent={info.attex.SAN / info.attex.SAN_MAX * 100} showInfo={false} />
        <Divider />
        <Flex wrap="wrap" gap="small" justify={'center'}>
          {
            attlist.map((value: ATT_Type, index: number) => (
              <InputNumber key={index} addonBefore={value} defaultValue={info.attribute[value]} className={styles.attgrid} onChange={(e) => setnum(e, value)} />
            ))
          }
          <InputNumber addonBefore={"体格"} defaultValue={info.attex.体格} className={styles.attgrid} onChange={(e) => setnum(e, "体格")} />
          <Input prefix="DB:" defaultValue={info.attex.DB} onChange={(e) => setinfo(e, "DB")} className={styles.attgrid} />
          <InputNumber addonBefore={"MOV"} defaultValue={info.attex.MOV} className={styles.attgrid} onChange={(e) => setnum(e, "MOV")} />
        </Flex>
      </div>
    )
  }

  function SkillPage() {
    return (
      <div className={styles.attinfo}>
        <div className={styles.atttitle}>技能</div>
        <SkillInput />
        <Flex wrap="wrap" gap="small" justify={'center'}>
          {
            info.skill.map((sk: SkillModal, index: number) => (
              // sk.workPoint + sk.interPoint + sk.ensurePoint > 0 ?
              <div key={index} className={styles.attgrid3} onClick={() => setSkillindex(index)}>
                <div>{sk.showName}</div><div>{sk.workPoint + sk.interPoint + sk.ensurePoint + sk.defaultPoint}</div>
              </div>
              // : <></>
            ))
          }
        </Flex>

      </div>
    )
  }

  function StoryPage() {
    return (
      <div className={styles.attinfo}>
        <div className={styles.atttitle}>背景故事</div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>个人介绍</div>
          <Input.TextArea className={styles.storytext} rows={8} defaultValue={info.story.个人介绍} onChange={(e) => setinfo(e, "个人介绍")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>形象描述</div>
          <Input.TextArea className={styles.storytext} rows={2} defaultValue={info.story.形象描述} onChange={(e) => setinfo(e, "形象描述")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>思想信念</div>
          <Input.TextArea className={styles.storytext} rows={2} defaultValue={info.story.思想信念} onChange={(e) => setinfo(e, "思想信念")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>重要之人</div>
          <Input.TextArea className={styles.storytext} rows={2} defaultValue={info.story.重要之人} onChange={(e) => setinfo(e, "重要之人")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>意义非凡之地</div>
          <Input.TextArea className={styles.storytext} rows={2} defaultValue={info.story.意义非凡之地} onChange={(e) => setinfo(e, "意义非凡之地")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>宝贵之物</div>
          <Input.TextArea className={styles.storytext} rows={2} defaultValue={info.story.宝贵之物} onChange={(e) => setinfo(e, "宝贵之物")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>特质</div>
          <Input.TextArea className={styles.storytext} rows={2} defaultValue={info.story.特质} onChange={(e) => setinfo(e, "特质")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>精神状况</div>
          <Input.TextArea className={styles.storytext} rows={3} defaultValue={info.story.精神状况} onChange={(e) => setinfo(e, "精神状况")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>魔法物品与典籍</div>
          <Input.TextArea className={styles.storytext} rows={2} defaultValue={info.story.魔法物品与典籍} onChange={(e) => setinfo(e, "魔法物品与典籍")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>法术</div>
          <Input.TextArea className={styles.storytext} rows={3} defaultValue={info.story.法术} onChange={(e) => setinfo(e, "法术")}></Input.TextArea>
        </div>
        <div className={styles.storymain}>
          <div className={styles.storytitle}>第三类接触</div>
          <Input.TextArea className={styles.storytext} rows={2} defaultValue={info.story.第三类接触} onChange={(e) => setinfo(e, "第三类接触")}></Input.TextArea>
        </div>

      </div>
    )
  }

  function CRPage() {
    return (
      <div className={styles.attinfo}>
        <div className={styles.atttitle}>资产情况</div>
        <Flex wrap="wrap" gap="small">

          <Input className={styles.attgrid3} prefix="生活水平:" defaultValue={info.CR.CR} onChange={(e) => setinfo(e, "生活水平")} />
          <Input className={styles.attgrid3} prefix="消费水平:" defaultValue={info.CR.消费水平} onChange={(e) => setinfo(e, "消费水平")} />
          <Input className={styles.attgrid3} prefix="现金:" defaultValue={info.CR.现金} onChange={(e) => setinfo(e, "现金")} />
          <Input className={styles.attgrid3} prefix="资产:" defaultValue={info.CR.资产} onChange={(e) => setinfo(e, "资产")} />
        </Flex>

      </div>
    )
  }


  function ItemPage() {
    return (
      <div className={styles.attinfo}>
        <div className={styles.atttitle}>随身物品</div>
        {/* <Flex wrap="wrap" gap="small">
          {
            info.item?.split(/,|，|\n/).map((it: string, index: number) => (
              <div className={styles.attgrid1}>
                {it}
              </div>
            ))
          }
        </Flex> */}

        <Input.TextArea className={styles.storytext} rows={8} defaultValue={info.item} onChange={(e) => setinfo(e, "随身物品")}></Input.TextArea>
      </div>
    )
  }

  function AddWeapon() {
    const w = { 名称: "武器名称", 伤害: "1d3", 射程: "10", 故障率: 100, 次数: 1, 装弹量: -1, 贯穿: false }
    info.weapon.push(w)
    setInfo(info)
    const windex = info.weapon.length - 1
    setWeaponindex(windex)
  }
  function DelWeapon(index: number) {
    const pc = { ...info }
    pc.weapon.splice(index, 1)
    setInfo(pc)
  }

  function WeaponInput() {
    var windex = weaponindex
    if (weaponindex == -2) {
      const w = { 名称: "weapon", 伤害: "1d3", 射程: "10", 故障率: 100, 次数: 1, 装弹量: -1, 贯穿: false }
      info.weapon.push(w)
      setInfo(info)
      setWeaponindex(info.weapon.length - 1)
      windex = info.weapon.length - 1
    }

    return (
      windex >= 0 ?
        <Modal
          title={info.weapon[windex]["名称"]}
          open={windex >= 0}
          onOk={handleWOk}
          onCancel={handleWCancel}>
          <Switch checkedChildren="贯穿" unCheckedChildren="非贯穿" defaultChecked={info.weapon[windex].贯穿} onChange={(e) => setbool(e, "贯穿")} />
          <Flex wrap="wrap" gap="small" justify={'center'}>

            <Input className={styles.skillinput} prefix={"武器名称:"} defaultValue={info.weapon[windex]["名称"]} onChange={(e) => setinfo(e, "名称")} />
            <Input className={styles.skillinput} prefix={"伤害:"} defaultValue={info.weapon[windex].伤害} onChange={(e) => setinfo(e, "伤害")} />

            <InputNumber className={styles.skillinput} addonBefore={"故障率:"} defaultValue={info.weapon[windex].故障率} onChange={(e) => setnum(e, "故障率")} />
            <InputNumber className={styles.skillinput} addonBefore={"装弹量:"} defaultValue={info.weapon[windex].装弹量} onChange={(e) => setnum(e, "装弹量")} />
          </Flex>

        </Modal>
        : <></>
    )
  }

  function WeaponPage() {
    return (
      <div className={styles.attinfo}>
        <div className={styles.atttitle}>武器</div>
        <WeaponInput />
        <Flex wrap="wrap" gap="small" justify={'center'}>
          {
            info.weapon.map((wp: any, index: number) => (
              <div className={styles.attgridw} key={index} >
                <div onClick={() => { setWeaponindex(index) }}>{wp["名称"]}</div>
                {wp["贯穿"] ? <div>贯穿√</div> : <div>贯穿×</div>}
                <div>⚡{wp["故障率"]}</div>
                <div>🔫{wp["装弹量"]}</div>
                <div>♥{wp["伤害"]}</div>
                <Button danger onClick={() => DelWeapon(index)}>删除</Button>
              </div>
            ))
          }
        </Flex>
        <Button onClick={AddWeapon}>添加</Button>
      </div>
    )
  }

  async function update_net(data: any) {
    const res = await fetch(api_url + '/coc_group_update', {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "data": data, "card_id": data._id }),
    })
    const rj = await res.json()
    if (rj.ok) {
      alert("已更新")
    }
  }

  function update() {
    const pc = { ...info }
    setInfo(pc)
    console.log(pc)
    update_net(pc)
  }


  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: '属性',
      children: <AttPage />
    },
    {
      key: '2',
      label: '技能',
      children: <SkillPage />,
    },
    {
      key: '3',
      label: '背景故事',
      children: <StoryPage />,
    },
    {
      key: '4',
      label: '经济情况',
      children: <CRPage />,
    },
    {
      key: '5',
      label: '随身物品',
      children: <ItemPage />,
    },
    {
      key: '6',
      label: '武器',
      children: <WeaponPage />,
    },
  ];

  return (
    <>
      <div className={styles.baseinfo}>
        <div className={styles.name}>{info.name} {info.info.sex === "男" ? "♂" : "♀"}</div>
        <Row>
          <Col span={12} className={styles.basegrid}>
            <Input prefix="职业:" defaultValue={info.职业} onChange={setname} />
          </Col>
          <Col span={12} className={styles.basegrid}>
            <Input prefix="年龄:" defaultValue={info.info.age} onChange={(e) => setinfo(e, "age")} />
          </Col>
        </Row>
        <Row>
          <Col span={12} className={styles.basegrid}>
            <Input prefix="年代:" defaultValue={info.info.time} onChange={(e) => setinfo(e, "time")} />
          </Col>

          <Col span={12} className={styles.basegrid}>
            <Input prefix="出生地:" defaultValue={info.info.whereborn} onChange={(e) => setinfo(e, "whereborn")} />
          </Col>
        </Row>
        <Row>
          <Col span={12} className={styles.basegrid}>
            <Input prefix="居住地:" defaultValue={info.info.wherelive} onChange={(e) => setinfo(e, "wherelive")} />
          </Col>
        </Row>
        <Button block type="primary" onClick={update}>更新</Button>
      </div>

      <Collapse items={items} defaultActiveKey={['1']}>;
        {/* <Collapse.Panel header="属性" key="1"> <AttPage/></Collapse.Panel>
      <Collapse.Panel header="背景故事" key="6"> <StoryPage/></Collapse.Panel> */}
      </Collapse>
    </>
  )

}




export default function Admin() {

  const [data, setData] = useState<GroupModal>()
  const [groupID, setGroupID] = useState("")
  const [tem, setTem] = useState(false)
  const [rules, setRules] = useState(false)

  async function getdata(group: string) {
    const res = await fetch(api_url + '/coc_group_get_all', {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "group": group }), // 请求数据体
    })
    const rjj = await res.json()
    var data = rjj["data"]
    if (data) {
      setData(data)
    }
  }

  async function update(data: any) {
    const res = await fetch(api_url + '/coc_group_config', {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "group": data._id, "config": data.config }),
    })
    const rj = await res.json()
    if (rj.ok) {
      alert("已更新")
    }
  }


  useEffect(() => {
    const queryStr = window.location.search.split("?")[1];
    var paramt = queryStr ? queryStr.split("&") : []
    var obj: { [key: string]: string } = {};
    for (let i = 0; i < paramt.length; i++) {
      let g = paramt[i].split("=");
      obj[g[0]] = g[1];
    }
    const groupid = obj["group"]
    setGroupID(groupid)
    getdata(groupid)
  }, []);


  const setnum= (e:any, name:string)=>{
    if(data){
      if(e){
        if(name==="point"){ data.config.point = e }
        else if(name==="dicetime"){ data.config.dicetime = e }
        else if(name==="succnum"){ data.config.succnum = e}
        else if(name==="failnum"){ data.config.failnum = e }
      }

      
    }
  }

  const handleWOk = ()=>{
    setData(data)
    setRules(false)
    update(data)
  }

  const handleWCancel = ()=>{
    setRules(false)
  }

  return (<>
    <div className={styles.bg}></div>
    {
      data?
      <Modal
      title="群规设置"
      open={rules}
      onOk={handleWOk}
      onCancel={handleWCancel}>
      <Flex wrap="wrap" gap="small" justify={'center'}>
        <InputNumber className={styles.skillinput} addonBefore={"属性随机次数:"} defaultValue={data.config.point} onChange={(e) => setnum(e, "point")} />
        <InputNumber className={styles.skillinput} addonBefore={"属性购点总值:"} defaultValue={data.config.dicetime} onChange={(e) => setnum(e, "dicetime")} />
        <InputNumber className={styles.skillinput} addonBefore={"大成功:"} 
        defaultValue={ data.config.succnum? data.config.succnum:"默认"} onChange={(e) => setnum(e, "succnum")} />
        <InputNumber className={styles.skillinput} addonBefore={"大失败:"} defaultValue={ data.config.failnum? data.config.failnum:"默认"} onChange={(e) => setnum(e, "failnum")} />
      </Flex>
    </Modal>
      :<></>
    }

    {
      data ?
        tem ?
          <Home/>
          : <>
            <head> <title>KP看板</title> </head>
            <div className={styles.maintitle}>KP看板<Button onClick={() => setTem(true)}>模板卡管理</Button><Button onClick={() => setRules(true)}>群规管理</Button></div>
            <Flex wrap="wrap" gap="small" justify={'center'}>
              {
                Object.keys(data.card).map((item, index) => (
                  <div key={index} style={{ width: "32%" }}><CardEdit card={data.card[item]} /></div>
                ))
              }

            </Flex>
          </>
        : <></>
    }

  </>)
}
