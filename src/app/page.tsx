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
import { api_url } from "./config";
import Card from './card'

async function create2net(pc: any, userid: string, groupid: string) {
  const res = await fetch(api_url + '/coc_group_add_pc', {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: JSON.stringify({ "user": userid, "group": groupid, "data": pc }),
  })
  const rj = await res.json()
  console.log(rj)
  return rj.ok
}

async function createtem2net(pc: any, groupid: string) {
  const res = await fetch(api_url + '/coc_group_add_tem', {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: JSON.stringify({ "group": groupid, "data": pc }),
  })
  const rj = await res.json()
  console.log(rj)
  return rj.ok
}

async function deletetem2net(pc: string, groupid: string) {
  const res = await fetch(api_url + '/coc_group_del_tem', {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: JSON.stringify({ "group": groupid, "card_id": pc }),
  })
  const rj = await res.json()
  return rj.ok
}

async function update2net(pc: any, pcid: string) {
  const res = await fetch(api_url + '/coc_group_update', {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: JSON.stringify({ "card_id": pcid, "data": pc }),
  })
  const rj = await res.json()
  return rj.ok
}

function ImportSelf({ group, user, pcid, data }: { group: string, user: string, pcid: string, data: { [key: string]: any }[] }) {
  const userData = data
  // 将其他群里的数据导入
  const daoruFun = function (index: number) {
    const data = userData[index]
    console.log("import self:", pcid)
    console.log("import data:", data)
    // 已有数据的更新，没有数据的新建
    if (pcid) {
      update2net(data, pcid).then(res => {
        if (res) {
          Modal.alert({ content: '已成功提交！', onConfirm() { window.location.reload() }, })
        }
      })
    } else {
      create2net(data, user, group).then(res => {
        if (res) {
          Modal.alert({ content: '已成功提交！', onConfirm() { window.location.reload() }, })
        }
      })
    }

  }

  return (<>
    <div className={styles.cardbg}>
      <div>我的角色卡</div>
      {
        userData.map((item: any, value: number) => (
          <div className={styles.onecard} key={value} style={{ backgroundColor: item.group ? "lightgoldenrodyellow" : "white" }}>
            <div className={styles.cardLeft}>
              {item.group ? <div>来自群：{item["group"]}</div> : <></>}
              <div>[{item.info["time"] ? item.info["time"] : "年代未知"} / {item.info["wherelive"] ? item.info["wherelive"] : "居住地未知"}]</div>
              <div>{item.info["sex"] === "女" ? "♀️" : "♂️"}{item["name"]} - {item["职业"]}</div>
            </div>
            <div className={styles.cardRight}>
              <Button color='success' onClick={() => daoruFun(value)}>导入</Button>
            </div>
          </div>
        ))
      }
    </div>
  </>)
}

function ImportPage({ group, user, pcid }: { group: string, user: string, pcid: string }) {
  const [temData, setTemData] = useState<{ group: { [key: string]: any }[], admin: { [key: string]: any }[] }>({ group: [], admin: [] })
  const daoruFun = function (data: any) {
    // 已有数据的更新，没有数据的新建
    if (pcid) {
      update2net(data, pcid).then(res => {
        if (res) {
          Modal.alert({ content: '已成功提交！', onConfirm() { window.location.reload() }, })
        }
      })
    } else {
      create2net(data, user, group).then(res => {
        if (res) {
          Modal.alert({ content: '已成功提交！', onConfirm() { window.location.reload() }, })
        }
      })
    }
  }

  const get_tem_data = async (group: string) => {
    const res = await fetch(api_url + '/coc_group_get_tem', {
      method: "post",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "group": group }),
    })
    const rj = await res.json()
    const data = rj.data
    setTemData(data)
  }
  useEffect(() => {
    get_tem_data(group)
  }, []);

  return (<>

    <div className={styles.cardbg2}>
      <div>COC7th预设角色卡</div>
      {
        temData["admin"].length > 0 ? temData["admin"].map((item: any, value: number) => (

          <div className={styles.onecard} key={item}>
            <div className={styles.cardLeft}>
              <div>[{item.info["time"] ? item.info["time"] : "年代未知"} / {item.info["wherelive"] ? item.info["wherelive"] : "居住地未知"}]</div>
              <div>{item.info["sex"] === "女" ? "♀️" : "♂️"}{item["name"]} - {item["职业"]}</div>
            </div>
            <div className={styles.cardRight}>
              <Button color='success' onClick={() => daoruFun(item)}>导入</Button>
            </div>
          </div>
        )) : <div className={styles.onecard}>暂无模板卡</div>
      }

      <div style={{ paddingTop: "32px" }}>本群预设角色卡</div>
      {
        temData["group"].length > 0 ? temData["group"].map((item: any, value: number) => (
          <div className={styles.onecard} key={item}>
            <div className={styles.cardLeft}>
              <div>[{item.info["time"] ? item.info["time"] : "年代未知"} / {item.info["wherelive"] ? item.info["wherelive"] : "居住地未知"}]</div>
              <div>{item.info["sex"] === "女" ? "♀️" : "♂️"}{item["name"]} - {item["职业"]}</div>
            </div>
            <div className={styles.cardRight}>
              <Button color='success' onClick={() => daoruFun(item)}>导入</Button>
            </div>
          </div>
        )) : <div className={styles.onecard}>暂无模板卡</div>
      }
    </div>

  </>)
}

// admin界面
function AdminPage({ group, pointAtt, attTime }: { group: string, pointAtt: number, attTime: number }) {
  const [temData, setTemData] = useState<{ group: { [key: string]: any }[], admin: { [key: string]: any }[] }>({ group: [], admin: [] })
  const [edit, setEdit] = useState("")
  const [create, setCreate] = useState(false)

  const get_tem_data = async (group: string) => {
    const res = await fetch(api_url + '/coc_group_get_tem', {
      method: "post",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "group": group }),
    })
    const rj = await res.json()
    const data = rj.data
    setTemData(data)
  }
  useEffect(() => {
    get_tem_data(group)
  }, []);

  const update_tem = (data: any) => {
    update2net(data, edit).then(res => {
      if (res) {
        Modal.alert({
          content: '已成功提交！', onConfirm() {
            setEdit("")
            get_tem_data(group)
          },
        })
      }
    })
  }

  const create_tem = (data: any) => {
    createtem2net(data, group).then(res => {
      if (res) {
        Modal.alert({
          content: '已成功提交！', onConfirm() {
            get_tem_data(group)
            setCreate(false)
          },
        })
      }
    })
  }

  const delete_tem = (pcid: string) => {
    Dialog.confirm({
      content: '确认删除？',
      onConfirm: async () => {
        deletetem2net(pcid, group).then(res => {
          if (res) {
            Toast.show({
              icon: 'success',
              content: '删除成功',
              position: 'bottom',
            })
            get_tem_data(group)
          }
        })

      },
    })
  }

  function MainShow() {
    return (
      <>
        <div className={styles.mainbg}>
          <div className={styles.cardbg2}>
            <div style={{ display: "flex", justifyContent: "center", fontSize: "22px" }}>群模板卡管理</div>
            {
              temData["group"].length > 0 ? temData["group"].map((item: any, value: number) => (
                <>

                  <div className={styles.onecard} key={item}>
                    <div className={styles.cardLeft}>
                      <div>[{item.info["time"] ? item.info["time"] : "年代未知"} / {item.info["wherelive"] ? item.info["wherelive"] : "居住地未知"}]</div>
                      <div>{item.info["sex"] === "女" ? "♀️" : "♂️"}{item["name"]} - {item["职业"]}</div>
                    </div>
                    <div className={styles.cardRight}>
                      <Button color='success' onClick={() => setEdit(item._id)}>编辑</Button>
                      <Button color='danger' onClick={() => delete_tem(item._id)} style={{ marginLeft: 8 }}>删除</Button>
                    </div>
                  </div>
                </>
              )) : <div className={styles.onecard}>暂无模板卡，点击下面按钮创建</div>
            }
            <Button block color='primary' onClick={() => setCreate(true)} style={{ marginTop: 16 }}>新增</Button>
            <Button block color='warning' onClick={() => window.location.reload()} style={{ marginTop: 8 }}>返回</Button>
          </div>
        </div>
      </>
    )

  }

  return (
    <>
      {
        create ? <Card pointatt={pointAtt} atttime={attTime} pcid="" completeFun={create_tem} /> :
          edit ? <Card pointatt={pointAtt} atttime={attTime} pcid={edit} completeFun={update_tem} /> : <MainShow />
      }
    </>
  )
}




export default function Home() {
  const [pointAtt, setPointAtt] = useState<number>(500)
  const [attTime, setAttTime] = useState<number>(5) //属性随机次数

  const [userid, setUserid] = useState("")
  const [groupid, setGroupid] = useState("")
  const [isedit, setIsedit] = useState(false)

  const [iscreate, setIscreate] = useState(false)
  const [isTem, setIsTem] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [userData, setUserData] = useState<{ user: { [key: string]: any }[], user_group: { [key: string]: any } }>()

  // 获取数据
  const get_user_data = async (CONFIG: any) => {
    const group = CONFIG["group"]
    const user = CONFIG['user']
    const res = await fetch(api_url + '/coc_group_get_user', {
      method: "post",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "user": user, "group": group }),
    })
    const rj = await res.json()
    const data = rj.data
    if (data["user"].length === 0 && data["user_group"].length === 0) {
      // setIscreate(true)
    } else {
      setUserData(data)
    }
  }

  // 获取配置
  const get_config = async (CONFIG: any) => {
    const group = CONFIG["group"]
    const res = await fetch(api_url + '/coc_group_config?group=' + group, {
      method: "get",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
    })
    const rj = await res.json()
    const data = rj.data
    const pointAtt_ = +data["point"] ? +data["point"] : 500
    const dicetime_ = +data["dicetime"] ? +data["dicetime"] : 5
    setAttTime(dicetime_)
    setPointAtt(pointAtt_)
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
    if(CONFIG["user"]){ get_user_data(CONFIG) }
    else { setAdmin(true) }
    
    get_config(CONFIG)
    setGroupid(CONFIG["group"])
    setUserid(CONFIG["user"])
  }, []);


  const commit_new = (data: any) => {
    create2net(data, userid, groupid).then(
      res => {
        Modal.alert({
          content: '已成功提交！', onConfirm() {
            window.location.reload()
          },
        })
      }
    )
  }

  const update_pc = (data: any) => {
    update2net(data,userData?.user_group._id ).then(res => {
      if (res) {
        Modal.alert({
          content: '已成功提交！', onConfirm() {
            setIsedit(false)
            get_user_data({group: groupid})
          },
        })
      }
    })
  }


  function MainShow() {
    return (
      <div className={styles.mainbg}>
        <ImportSelf group={groupid} user={userid} pcid={userData?.user_group._id} data={userData ? userData.user : []} />

        <div className={styles.cardbg}>
          <div>本群我的角色卡</div>
          {
            userData?.user_group["name"] ?
              <div className={styles.onecard} >
                <div className={styles.cardLeft}>
                  <div>[{userData?.user_group.info["time"] ? userData?.user_group.info["time"] : "年代未知"} / {userData?.user_group.info["wherelive"] ? userData?.user_group.info["wherelive"] : "居住地未知"}]</div>
                  <div>{userData?.user_group.info["sex"] === "女" ? "♀️" : "♂️"}{userData?.user_group["name"]} - {userData?.user_group["职业"]} </div>

                </div>
                <div className={styles.cardRight}>
                  <Button color='success' onClick={() => { setIsedit(true) }}>编辑</Button>
                </div>

              </div>
              :
              <></>
          }
        </div>

        <div><Button block color='success' size='large' onClick={() => { setIscreate(true) }}>新建角色卡</Button></div>
        <div><Button block color='success' size='large' onClick={() => { setIsTem(true) }} style={{ marginTop: 16 }}>导入预设卡</Button></div>

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
          isedit ?
            <Card pointatt={pointAtt} atttime={attTime} pcid={userData?.user_group._id} completeFun={update_pc} />
            :
            <MainShow />
      }
    </>)
  }

  // 模板界面
  function Templete() {
    return (<>
      <div className={styles.mainbg2}>
        <ImportPage group={groupid} user={userid} pcid={userData?.user_group._id} />
        <div><Button block color='success' size='large' onClick={() => { setIsTem(false) }} style={{ marginTop: 32 }}>返回</Button></div>
        <div className={styles.newtemtext}> <div onClick={() => { setAdmin(true) }}>模板管理</div> </div>
      </div>
    </>)
  }




  return (<>{
    admin ?
      <AdminPage group={groupid} pointAtt={pointAtt} attTime={attTime} />
      :
      isTem ? <Templete /> : <User />
  }</>
  )
}
