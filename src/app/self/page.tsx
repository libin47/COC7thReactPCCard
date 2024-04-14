"use client"
import styles from "./page.module.css";
import { useState, useEffect } from 'react'
import {
  Form,
  Input,
  Button,
  TextArea,
  Picker,
  Grid,
  Dialog,
  Radio,
  Space,
  Cascader,
  Tabs,
  Toast,
  SideBar,
  Modal,
  Stepper
} from 'antd-mobile'
import { api_url } from "../config";
import Card from '../card'

async function create2net(pc: any, userid: string) {
  const res = await fetch(api_url + '/coc_self_add_pc', {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: JSON.stringify({ "id": userid, "data": pc }),
  })
  const rj = await res.json()
  return rj.ok
}


async function delete2net(pc: string, userid: string) {
  const res = await fetch(api_url + '/coc_self_del_pc', {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: JSON.stringify({ "id": userid, "card_id": pc }),
  })
  const rj = await res.json()
  return rj.ok
}

async function update2net(pc: any, pcid: string) {
  const res = await fetch(api_url + '/coc_self_update', {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: JSON.stringify({ "card_id": pcid, "data": pc }),
  })
  const rj = await res.json()
  return rj.ok
}



export default function Home() {
  const [pointAtt, setPointAtt] = useState<number>(999)
  const [attTime, setAttTime] = useState<number>(10) //属性随机次数

  const [userid, setUserid] = useState("")
  const [edit, setEdit] = useState("")

  const [iscreate, setIscreate] = useState(false)
  const [isTem, setIsTem] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [createTem, setCreateTem] = useState(false)
  const [userData, setUserData] = useState<any[]>()

  // 获取数据
  const get_user_data = async (user: string) => {
    const res = await fetch(api_url + '/coc_self_get_pc', {
      method: "post",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "id": user }),
    })
    const rj = await res.json()
    const data = rj.data
    if (data.length === 0) {
      // setIscreate(true)
    } else {
      setUserData(data)
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
    const CONFIG = obj
    get_user_data(CONFIG["user"])
    setUserid(CONFIG["user"])
  }, []);


  const commit_new = (data: any) => {
    create2net(data, userid).then(res => {
      if (res) {
        Modal.alert({
          content: '已成功提交！', onConfirm() {
            get_user_data(userid)
            setIscreate(false)
          },
        })
      }
    })
  }
  const delete_card = (pcid: string) => {
    Dialog.confirm({
      content: '确认删除？',
      onConfirm: async () => {
        delete2net(pcid, userid).then(res => {
          if (res) {
            Toast.show({
              icon: 'success',
              content: '删除成功',
              position: 'bottom',
            })
            get_user_data(userid)
          }
        })

      },
    })
  }

  const update_card = (data: any) => {
    update2net(data, edit).then(res => {
      if (res) {
        Modal.alert({
          content: '已更新', onConfirm() {
            get_user_data(userid)
            setEdit("")
          },
        })
      }
    })
  }


  function MainShow() {
    return (
      <div className={styles.mainbg}>

        <div className={styles.cardbg}>
          <div className={styles.title}>我的角色卡</div>
          {
            userData ?
              userData.map((item: any, value: number) => (
                <div className={styles.onecard} key={value} style={{ backgroundColor: item.group ? "lightgoldenrodyellow" : "white" }}>
                  <div className={styles.cardLeft}>
                    {item.group ? <text>来自群：{item["group"]}</text> : <></>}
                    <div>[{item.info["time"] ? item.info["time"] : "年代未知"} / {item.info["wherelive"] ? item.info["wherelive"] : "居住地未知"}]</div>
                    <div>{item["name"]} - {item["职业"]} - {item.info["sex"]==2?"女":"男"}</div>
                  </div>


                  <div className={styles.cardRight}>
                    <Button color='success' onClick={() => setEdit(item._id)}>编辑</Button>
                    <Button color='danger' onClick={() => delete_card(item._id)} style={{ marginLeft: 8 }}>删除</Button>
                  </div>
                </div>

              )) : <></>
          }

        </div>

        <div><Button block color='success' size='large' onClick={() => { setIscreate(true) }}>新建角色卡</Button></div>

      </div>
    )
  }

  // 用户界面
  function User() {
    return (<>
      {
        iscreate ?
          <Card pointatt={pointAtt} atttime={attTime} pcid="" completeFun={commit_new} />
          :
          edit ?
            <Card pointatt={pointAtt} atttime={attTime} pcid={edit} completeFun={update_card} />
            :
            <MainShow />
      }
    </>)
  }




  return (<>{
    <User />
  }</>
  )
}
