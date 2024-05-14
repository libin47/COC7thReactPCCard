"use client"
import styles from "./page.module.css";
import { useState, useEffect } from 'react'
import { InfoModal, SkillModal } from '../card'
import { ATT_Type, hero_skill_default } from '../data'
import {
  Form,
  Input,
  Button,
  TextArea,
  Picker,
  Grid,
  ProgressBar,
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


export default function PCshow() {

  const [pcid, setPcid] = useState("")
  const [info, setInfo] = useState<InfoModal>()


  const attlist: ATT_Type[] = ['力量', '体质', '敏捷', '外貌', '意志', '体型', '教育', '智力', "幸运"]

  const get_data = async (pcid: string) => {
    const res = await fetch(api_url + '/coc_get_card', {
      method: "post",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: JSON.stringify({ "card_id": pcid }),
    })
    const rj = await res.json()
    const data = rj.data
    if (data._id !== 0) {
      setInfo(data)
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
    setPcid(CONFIG["pcid"])
    get_data(CONFIG["pcid"])
  }, []);

  return (<>
    {
      info ?<>
        <div className={styles.bg}>

        </div>
          
          <div className={styles.baseinfo}>
            <div className={styles.name}>{info.name} {info.info.sex === "男" ? "♂" : "♀"}</div>
            <Grid columns={2}>
              <Grid.Item className={styles.basegrid}>
                职业:{info.职业}
              </Grid.Item>
              <Grid.Item className={styles.basegrid}>
                年龄:{info.info.age}
              </Grid.Item>
              <Grid.Item className={styles.basegrid}>
                年代:{info.info.time}
              </Grid.Item>
              <Grid.Item className={styles.basegrid}>
                出生地:{info.info.whereborn}
              </Grid.Item>
              <Grid.Item className={styles.basegrid}>
                居住地:{info.info.wherelive}
              </Grid.Item>
            </Grid>
          </div>

          {
            info.hero && info.hero>0?
            <div className={styles.baseinfo}>
            <Grid columns={2}>
              <Grid.Item className={styles.basegrid}>
              🦸英雄级别:{info.hero}
              </Grid.Item>
              <Grid.Item className={styles.basegrid}>
              🦸英雄类别:{info.heroinfo.name}
              </Grid.Item>
              <Grid.Item className={styles.basegrid}>
              🦸英雄天赋:{info.heroinfo.skill.join(",")}
              </Grid.Item>
              <Grid.Item className={styles.basegrid}>
              🦸英雄主属性:{info.heroinfo.mainatt}
              </Grid.Item>
              {
                info.heroinfo.skill.map((item:any)=>(
                  <Grid.Item className={styles.attgrid} key={item}>
                  🦸【{item}】<br></br>{hero_skill_default[item]}
                </Grid.Item>
                ))
              }
            </Grid>
          </div>
            :<></>
          }


          <div className={styles.attinfo}>
            <div className={styles.atttitle}>属性</div>
            <Grid columns={3}>
              <Grid.Item className={styles.attbase}>
                <div>HP</div><div>{info.attex.HP}/{info.attex.HP_MAX}</div>
              </Grid.Item>
              <Grid.Item className={styles.attbase}>
                <div>MP</div><div>{info.attex.MP}/{info.attex.MP_MAX}</div>
              </Grid.Item>
              <Grid.Item className={styles.attbase}>
                <div>SAN</div><div>{info.attex.SAN}/{info.attex.SAN_MAX}</div>
              </Grid.Item>
              <Grid.Item className={styles.attprogress}>
                <ProgressBar percent={info.attex.HP / info.attex.HP_MAX * 100} />
              </Grid.Item>
              <Grid.Item className={styles.attprogress}>
                <ProgressBar percent={info.attex.MP / info.attex.MP_MAX * 100} />
              </Grid.Item>
              <Grid.Item className={styles.attprogress}>
                <ProgressBar percent={info.attex.SAN / info.attex.SAN_MAX * 100} />
              </Grid.Item>
              {
                attlist.map((value: ATT_Type, index: number) => (
                  <Grid.Item className={styles.attgrid} key={index}>
                    <div>{value}</div><div>{info.attribute[value]}</div>
                  </Grid.Item>
                ))
              }
              <Grid.Item className={styles.attgrid}>
                <div>体格</div><div>{info.attex.体格}</div>
              </Grid.Item>
              <Grid.Item className={styles.attgrid}>
                <div>DB</div><div>{info.attex.DB}</div>
              </Grid.Item>
              <Grid.Item className={styles.attgrid}>
                <div>MOV</div><div>{info.attex.MOV}</div>
              </Grid.Item>
            </Grid>
          </div>


          <div className={styles.attinfo}>
            <div className={styles.atttitle}>技能</div>
            <Grid columns={2}>
              {
                info.skill.map((sk: SkillModal, index: number) => (
                  sk.workPoint + sk.interPoint + sk.ensurePoint > 0 ?
                    <Grid.Item className={styles.attgrid}  key={index}>
                      <div>{sk.showName}</div><div>{sk.workPoint + sk.interPoint + sk.ensurePoint + sk.defaultPoint}</div>
                    </Grid.Item>
                    : <></>
                ))
              }
            </Grid>
          </div>

          <div className={styles.attinfo}>
            <div className={styles.atttitle}>资产情况</div>
            <Grid columns={2}>
                  <Grid.Item className={styles.attgrid}>
                    <div>生活水平</div><div>{info.CR.CR}</div>
                  </Grid.Item>
                  <Grid.Item className={styles.attgrid}>
                    <div>消费水平</div><div>{info.CR.消费水平}</div>
                  </Grid.Item>
                  <Grid.Item className={styles.attgrid}>
                    <div>现金</div><div>{info.CR.现金}</div>
                  </Grid.Item>
                  <Grid.Item className={styles.attgrid}>
                    <div>资产</div><div>{info.CR.资产}</div>
                  </Grid.Item>
            </Grid>
          </div>

          <div className={styles.attinfo}>
            <div className={styles.atttitle}>随身物品</div>
            <Grid columns={2}>
              {
                info.item?.split(/,|，|\n/).map((it: string, index: number) => (
                  <Grid.Item className={styles.attgrid}  key={index}>
                    {it}
                  </Grid.Item>
                ))
              }
            </Grid>
          </div>

          <div className={styles.attinfo}>
            <div className={styles.atttitle}>武器</div>
            <Grid columns={1}>
              {
                info.weapon.map((wp: any, index: number) => (
                  <Grid.Item className={styles.attgrid}  key={index}>
                    <div>{wp["名称"]}</div><div>{wp["伤害"]}</div>
                  </Grid.Item>
                ))
              }
            </Grid>
          </div>

          <div className={styles.attinfo}>
            <div className={styles.atttitle}>背景故事</div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>个人介绍</div>
              <div className={styles.storytext}>{info.story.个人介绍}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>形象描述</div>
              <div className={styles.storytext}>{info.story.形象描述}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>思想信念</div>
              <div className={styles.storytext}>{info.story.思想信念}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>重要之人</div>
              <div className={styles.storytext}>{info.story.重要之人}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>意义非凡之地</div>
              <div className={styles.storytext}>{info.story.意义非凡之地}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>宝贵之物</div>
              <div className={styles.storytext}>{info.story.宝贵之物}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>特质</div>
              <div className={styles.storytext}>{info.story.特质}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>精神状况</div>
              <div className={styles.storytext}>{info.story.精神状况}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>魔法物品与典籍</div>
              <div className={styles.storytext}>{info.story.魔法物品与典籍}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>法术</div>
              <div className={styles.storytext}>{info.story.法术}</div>
            </div>
            <div className={styles.storymain}>
              <div className={styles.storytitle}>第三类接触</div>
              <div className={styles.storytext}>{info.story.第三类接触}</div>
            </div>

          </div>

        </>
        : <></>
    }


  </>
  )
}
