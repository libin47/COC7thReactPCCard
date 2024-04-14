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

export default function PCshow() {
  const [form_main] = Form.useForm()
  const [form_info] = Form.useForm()
  const [form_att] = Form.useForm()
  const [form_attex] = Form.useForm()
  const [form_skill] = Form.useForm()
  const [form_bj] = Form.useForm()
  const [form_weapon] = Form.useForm()

  
  const [pcid, setPcid] = useState("") 


  useEffect(() => {
    const queryStr = window.location.search.split("?")[1];
    var paramt = queryStr ? queryStr.split("&") : []
    var obj: { [key: string]: string } = {};
    for (let i = 0; i < paramt.length; i++) {
      let g = paramt[i].split("=");
      obj[g[0]] = g[1];
    }
    const CONFIG = obj
    setPcid(CONFIG["pcid"])
  }, []);

  const setData = function(data:any){
    return
  }

  return (<>
  {
    pcid?
      <Card pointatt={0} atttime={0} pcid={pcid} completeFun={setData} />
    :<></>
  }
            
    
  </>
  )
}
