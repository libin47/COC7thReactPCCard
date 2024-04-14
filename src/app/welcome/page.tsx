"use client"
import { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Button,
  Alert 
} from 'antd'



export default function Home() {

  const [userData, setUserData] = useState<any[]>([])
  const [showData, setShowData] = useState<any[]>([])
  const [groupID, setGroupID] = useState("")

  async function getdata(group: string) {
    const res = await fetch('/api/get_all_user', {
      method: "POST", // http请求方法，GET/POST/DELETE/PUT等
      headers: { // 请求头配置
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "group": group }), // 请求数据体
    })
    const rjj = await res.json()
    const rj = rjj["data"]

    // const rj:{[key:string]: any} = {'_id': 'aaaa', 'status': true, 'Gaming': 'pause', 'bbbb': {'attribute': {'力量': 45, '体质': 55, '敏捷': 55, '外貌': 40, '意志': 80, '体型': 80, '教育': 80, '智力': 75, '幸运': 65}, 'story': {}, 'item': {}, 'HP_MAX': 13, 'HP': '12', 'MP_MAX': 16, 'MP': 16, 'SAN_MAX': 99, 'SAN': 80, 'MOV': 7, '体格': 1, 'DB': '+1D4', 'name': '李斌', 'age': 0, 'sex': 0, 'time': '', 'whereborn': '', 'wherelive': '', '职业': '作家(原作向)', 'skill': [], 'weapon': []}, 'wx1234': {'attribute': {'力量': 50, '体质': 55, '敏捷': 45, '外貌': 50, '意志': 60, '体型': 80, '教育': 45, '智力': 60, '幸运': 70}, 'story': {'形象描述': '形象描述', '思想信念': '思想理念', '重要之人': '重要之人', '意义非凡之地': '意义非凡之地', '宝贵之物': '宝贵之物', '特质': '特质', '精神状况': '精神', '个人介绍': '个人介绍', '魔法物品与典籍': '魔法物品', '法术': '法术', '第三类接触': '第三类接触'}, 'item': '物品\n转包给\n物品2', 'HP_MAX': 13, 'HP': 13, 'MP_MAX': 12, 'MP': 12, 'SAN_MAX': 99, 'SAN': 60, 'MOV': 7, '体格': 1, 'DB': '+1D4', 'name': '克苏鲁', 'age': 23, 'sex': 0, 'time': '1920', 'whereborn': '阿波罗', 'wherelive': '111', '职业': '文物学家(原作向)', 'skill': [{'name': '侦查', 'sub': false, 'subName': '', 'showName': '侦查', 'work': true, 'defaultPoint': 25, 'workPoint': 0, 'interPoint': 30, 'levelup': true}, {'name': '图书馆使用', 'sub': false, 'subName': '', 'showName': '图书馆使用', 'work': true, 'defaultPoint': 20, 'workPoint': 40, 'interPoint': 0, 'levelup': true}, {'name': '取悦', 'sub': false, 'subName': '', 'showName': '取悦', 'work': true, 'defaultPoint': 15, 'workPoint': 50, 'interPoint': 30, 'levelup': true}, {'name': '恐吓', 'sub': false, 'subName': '', 'showName': '恐吓', 'work': true, 'defaultPoint': 15, 'workPoint': 0, 'interPoint': 30, 'levelup': true}, {'name': '外语', 'sub': true, 'subName': '汉语', 'subList': ['汉语', '英语', '日语', '法语', '俄语', '德语', '韩语', '粤语', '拉丁语', '荷兰语', '挪威语', '丹麦语', '印度语', '西班牙语', '葡萄牙语', '阿拉伯语'], 'showName': '外语', 'work': true, 'defaultPoint': 1, 'workPoint': 0, 'interPoint': 30, 'levelup': true}, {'name': '估价', 'sub': false, 'subName': '', 'showName': '估价', 'work': true, 'defaultPoint': 5, 'workPoint': 50, 'interPoint': 0, 'levelup': true}, {'name': '技艺', 'sub': true, 'subName': '', 'subList': ['表演', '音乐', '绘画', '艺术', '摄影', '写作', '书法', '打字', '速记', '伪造', '烹饪', '裁缝', '理发', '技术制图', '耕作', '木工', '铁匠', '焊接', '管道工'], 'showName': '技艺', 'work': true, 'defaultPoint': 5, 'workPoint': 40, 'interPoint': 0, 'levelup': true}], 'weapon': [{'名称': 'AK-74', '伤害': '2D6+1', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 30, '故障率': 97}]}}
    var data:{[key:string]: any}[] = []
    for(var key in rj){
      if (["Gaming", "status", "_id"].indexOf(key)>=0) {
      } else {
        var sss = rj[key]
        sss["wxid"] = key
        data.push(sss)
      }
    }
    console.log(data)
    setUserData(data)
  }

  async function update_net(data:any) {
    const res = await fetch('/api/coc_update_user', {
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
    for(let i=0;i<userData.length;i++){
      if (userData[i].wxid==wxid){
        index = i
        break
      }
    }
    if(index>=0){
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
    var wxid:string = "wxid" in allvalue?allvalue["wxid"]:""
    var index = -1
    for(let i=0;i<userData.length;i++){
      if (userData[i].wxid==wxid){
        index = i
        break
      }
    }
    if(index>=0){
      var data = userData
      for (let key in allvalue) {
        data[index][key] = allvalue[key]
      }
      setUserData(data)
    } else{
      return 
    }

  }


  return (<>
    KP看板
    {
      userData.map((value, index) => (
        <div key={index} style={{ backgroundColor: "white", width: "30%", display: "flex" }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, width: "80%" }}
            initialValues={{wxid:value.wxid, name: value.name, HP: value.HP, MP: value.MP, SAN: value.SAN }}
            autoComplete="off"
            onValuesChange={update_local}
          >
            <Form.Item
              label="wxid"
              name="wxid"
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="name"
              name="name"
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label={"HP(" + value.HP_MAX + ")"}
              name="HP"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={"MP(" + value.MP_MAX + ")"}
              name="MP"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="SAN"
              name="SAN"
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" onClick={() => updatethis(value.wxid)}>
                更新
              </Button>
            </Form.Item>
          </Form>
        </div>
      ))
    }
  </>)
}
