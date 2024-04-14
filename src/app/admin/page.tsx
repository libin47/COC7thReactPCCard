"use client"
import styles from "./page.module.css";
import { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Button,
  Alert,
  Row,
  Col,
  List,
  Flex
} from 'antd'
import { api_url } from "../config"




export default function Home() {

  const [userData, setUserData] = useState<any[]>([])
  const [groupID, setGroupID] = useState("")

  async function getdata(group: string) {
    const res = await fetch(api_url + '/get_all_user', {
      method: "POST", // http请求方法，GET/POST/DELETE/PUT等
      headers: { // 请求头配置
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "group": group }), // 请求数据体
    })
    const rjj = await res.json()
    const rj = rjj["data"]
    var data: { [key: string]: any }[] = []
    for (var key in rj) {
      if (["Gaming", "status", "_id"].indexOf(key) >= 0) {
      } else {
        var sss = rj[key]
        sss["wxid"] = key
        data.push(sss)
      }
    }
    setUserData(data)
  }

  async function update_net(data: any) {
    const res = await fetch('/coc_update_user', {
      method: "POST", // http请求方法，GET/POST/DELETE/PUT等
      headers: { // 请求头配置
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify(data), // 请求数据体
    })
    const rj = await res.json()
    if (rj.ok) {
      alert("成功提交")
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

  const updatethis = function (value: any) {
    console.log(value)
    var wxid = value
    var index = -1
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].wxid == wxid) {
        index = i
        break
      }
    }
    if (index >= 0) {
      var data = {
        "group": groupID,
        "wxid": wxid,
        "HP": +userData[index]["HP"],
        "MP": +userData[index]["MP"],
        "SAN": +userData[index]["SAN"],
      }
      update_net(data)
    }

  }
  const update_local = function (value: any, allvalue: any) {
    // console.log(value)
    console.log(userData)
    var wxid: string = "wxid" in allvalue ? allvalue["wxid"] : ""
    var index = -1
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].wxid == wxid) {
        index = i
        break
      }
    }
    if (index >= 0) {
      var data = userData
      for (let key in allvalue) {
        data[index][key] = allvalue[key]
      }
      setUserData(data)
    } else {
      return
    }

  }


  return (<>
  <head> <title>KP看板</title> </head>
    <div className={styles.maintitle}>KP看板</div>
    {
      userData.map((value, index) => (
        <Row key={index} style={{ backgroundColor: "white", color: "black", borderBottom: "2px solid #000", display: "flex" }}>
          <Col span={4}  className={styles.info}>
            <div key={index}>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, width: "80%" }}
                initialValues={{ DB: value.DB, HP: value.HP, MP: value.MP, SAN: value.SAN, 职业:value["职业"],sex:value.sex>1?"女":"男" }}
                autoComplete="off"
                onValuesChange={update_local}
              >
                <div className={styles.name}>{value.name}</div>
                <Form.Item
                  label={"HP(" + value.HP_MAX + ")"}
                  name="HP"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={"MP(" + value.MP_MAX + ")"}
                  name="MP"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="SAN"
                  name="SAN"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="DB"
                  name="DB"
                  style={{ height: 20, paddingTop: 10 }}
                >
                  <Input readOnly/>
                </Form.Item>
                <Form.Item
                  label="职业"
                  name="职业"
                  style={{ height: 10 }}
                >
                  <Input readOnly/>
                </Form.Item>
                <Form.Item
                  label="性别"
                  name="sex"
                  style={{ height: 10 }}
                >
                  <Input readOnly/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ paddingTop: 10 }}>
                  <Button type="primary" htmlType="submit" onClick={() => updatethis(value.wxid)}>
                    更新
                  </Button>
                </Form.Item>
              </Form>
            </div></Col>
          <Col span={2}  className={styles.attribute}>

            <div className={styles.title}>属性</div>
            <Flex wrap="wrap" gap="small" >
              {
                Object.keys(value.attribute).map((item) => (
                  <div className={styles.attributeText} key={item}>{item}: {value.attribute[item]}</div>
                ))
              }
            </Flex>

          </Col>
          <Col span={4}   className={styles.skill}>
            <div className={styles.title}>技能</div>
            <Flex wrap="wrap" gap="small" >
              {
                Object.keys(value.skill).map((item) => (
                  <div className={styles.skillText} key={item}>{item}: {value.skill[item]}</div>
                ))
              }
            </Flex>
          </Col>
          <Col span={6} className={styles.story}>
            <div  className={styles.title}>背景故事</div>
            <Form
                name="story"
                initialValues={{ 个人介绍: value.story.个人介绍, 形象描述: value.story.形象描述, 宝贵之物: value.story.宝贵之物, 重要之人: value.story.重要之人, 意义非凡之地:value.story.意义非凡之地,精神状况:value.story.精神状况, 思想信念:value.story.思想信念, 特质:value.story.特质}}
                autoComplete="off"
                onValuesChange={update_local}
              >
                <Form.Item
                  label={"个人介绍"}
                  name="个人介绍"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="形象描述"
                  name="形象描述"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="宝贵之物"
                  name="宝贵之物"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={"重要之人"}
                  name="重要之人"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="非凡之地"
                  name="意义非凡之地"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="精神状况"
                  name="精神状况"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="思想信念"
                  name="思想信念"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="特质"
                  name="特质"
                  style={{ height: 10 }}
                >
                  <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ paddingTop: 10 }}>
                  <Button disabled type="primary" htmlType="submit" onClick={() => updatethis(value.wxid)}>
                    更新
                  </Button>
                </Form.Item>
              </Form>
          </Col>
          <Col span={4} className={styles.weapon}>
            <div className={styles.title}>武器</div>
            <Flex wrap="wrap" gap="small" >
              {
                Object.keys(value.weapon).map((item) => (
                  <div className={styles.weapontext}  key={item}>{item}: {value.weapon[item]["伤害"]}</div>
                ))
              }
            </Flex>
            
            <div className={styles.title} style={{paddingTop: 32}}>克苏鲁神话相关</div>
            <Flex wrap="wrap" gap="small" >
            <div className={styles.weapontext}>法术: {value.story.法术}</div>
            <div className={styles.weapontext}>第三类接触: {value.story.第三类接触}</div>
            <div className={styles.weapontext}>魔法物品和典籍: {value.story.魔法物品和典籍}</div>
            </Flex>
          </Col>
          <Col span={4} className={styles.item}>
            <div className={styles.title}>随身物品</div>
            <div className={styles.weapontext}>{value.item}</div>

          </Col>
        </Row>

      ))
    }
  </>)
}
