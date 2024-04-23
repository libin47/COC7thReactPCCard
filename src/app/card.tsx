"use client"
import styles from "./page.module.css";
import { useState, useEffect } from 'react'
import { work_options, skill_option, work_default, skill_default, weapon_options, weapon_default, ATT_Type, CR_default } from './data'
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
    Modal,
    Popup,
    Stepper,
    Collapse
} from 'antd-mobile'
import { api_url } from "./config";
import { formatCountdown } from "antd/es/statistic/utils";


function get_fromlist(list: any, name: string, searchword = 'name') {
    for (var i = 0; i < list.length; i++) {
        if (list[i][searchword] === name) {
            return i
        }
    }
    return -1
}

function get_fromlist_subdiff(list: any, name: string, searchword: string) {
    for (var i = 0; i < list.length; i++) {
        if (list[i]["work"] === false && list[i][searchword] === name) {
            return i
        }
    }
    return -1
}
function get_fromlist_nosub(list: any, name: string) {
    for (var i = 0; i < list.length; i++) {
        if (list[i]["work"] === false && list[i]["name"] === name && list[i]["sub"]) {
            return i
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

export interface SkillModal {
    name: string,
    showName: string,
    sub: boolean,
    subName?: string,
    subList?: string[],
    work: boolean,
    defaultPoint: number,
    workPoint: number,
    interPoint: number,
    ensurePoint: number,
    levelup: boolean,
    ensure: boolean,
    self?: boolean
}

type AttModal = {
    [key in ATT_Type]: number;
};

interface AttExModal {
    HP: number,
    HP_MAX: number,
    MP: number,
    MP_MAX: number,
    SAN: number,
    SAN_MAX: number,
    MOV: number,
    DB: string,
    体格: number,
}

export interface IModal {
    sex: string,
    age: number,
    time: string,
    whereborn: string,
    wherelive: string
}

interface SkillWorkModal {
    index: number,
    name?: string,
    showname?: string,
    sub_name?: string,
    select_list?: { name: string }[]
}

export interface InfoModal {
    name: string,
    info: IModal,
    item: string,
    职业: string,
    attribute: AttModal,
    attex: AttExModal,
    skill: SkillModal[],
    skill_work: SkillWorkModal[],
    story: {
        个人介绍: string,
        形象描述: string,
        思想信念: string,
        重要之人: string,
        意义非凡之地: string,
        宝贵之物: string,
        特质: string,
        精神状况: string,
        魔法物品与典籍: string,
        法术: string,
        第三类接触: string,
    },
    CR: { CR: string, 现金: string, 资产: string, 消费水平: string }
    weapon: { 名称: string, 伤害: string, 射程: string, 故障率: number, 次数: number, 装弹量: number, 贯穿: boolean }[]
}


export default function Card({ pointatt, atttime, pcid, completeFun }: { pointatt: number, atttime: number, pcid: string, completeFun: Function }) {

    const pc_init: InfoModal = {
        name: "",
        info: { sex: "男", age: 0, time: "1920s", whereborn: "", wherelive: "" },
        item: "",
        职业: "",
        attribute: { 力量: 0, 敏捷: 0, 体质: 0, 外貌: 0, 意志: 0, 体型: 0, 教育: 0, 智力: 0, 幸运: 0 },
        attex: { HP: 0, HP_MAX: 0, MP: 0, MP_MAX: 0, SAN: 0, SAN_MAX: 0, MOV: 0, DB: "-2", 体格: -2, },
        skill: [],
        skill_work: [],
        story: { 个人介绍: "", 形象描述: "", 思想信念: "", 重要之人: "", 意义非凡之地: "", 宝贵之物: "", 特质: "", 精神状况: "", 魔法物品与典籍: "", 法术: "", 第三类接触: "" },
        CR: { CR: "赤贫", 现金: "0", 资产: "0", 消费水平: "0" },
        weapon: []
    }
    const pointAtt = pointatt
    const [attType, setAttType] = useState<string>('gd')  // 属性选择方式
    const [luck, setLuck] = useState<number>(0) //幸运
    const [luckTime, setLuckTime] = useState<number>(5) //幸运随机次数

    const [popSwitch, setPopSwitch] = useState(false)

    const [attTime, setAttTime] = useState<number>(atttime) //属性随机次数
    const [attDice, setAttDice] = useState<number[][]>([])  //属性随机结果
    const [visibleWork, setVisibleWork] = useState(false) // 职业选择框可见
    const [visibleWeapon, setVisibleWeapon] = useState(false) // 武器选择框可见
    const [pickleVisible, setPickleVisible] = useState(false) // 技能选择框可见
    const [pickleData, setPickleData] = useState<any[]>([])   // 技能选择项
    const [pickleSubVisible, setPickleSubVisible] = useState(false) //子技能选择框可见
    const [pickleSubData, setPickleSubData] = useState<any[]>([]) // 子技能选择项
    const [pickleIndex, setPickleIndex] = useState(-1)  // 传递过来的技能索引
    const [activeKey, setActiveKey] = useState('本职')  // 技能导航key
    const [skill, setSkill] = useState<SkillModal[]>([]) // 技能表
    const [skillwork, setSkillwork] = useState<SkillWorkModal[]>([]) // 显示的本职技能
    const [moneyshow, setMoneyshow] = useState<number[]>([0, 100])
    const [pointSkills, setPointSkills] = useState<number[]>([0, 0])  // 总技能点数
    const [pointSkillUse, setPointSkillUse] = useState<number[]>([0, 0])  // 已用技能点数
    const [weaponUse, setWeaponUse] = useState<any[]>([weapon_default["徒手"]])

    const [pcInfo, setPcInfo] = useState<InfoModal>(pc_init)


    const attlist: ATT_Type[] = ['力量', '体质', '敏捷', '外貌', '意志', '体型', '教育', '智力']
    const atthelp = ["0：衰弱：甚至无法站立，连杯茶都端不起来。15：羸弱，无力。50：普通人的力量。90：你所见过的最强壮的人之一。99：世界级水平（奥运会举重选手）。人类极限。140：超越人类之力（大猩猩或马匹）。",
        " 0：死亡。1：病弱，长期卧病在床，无人协助时几乎无法行动。15：身体虚弱，容易生病，疼痛常伴。50：健康普通人的体质。90：不畏寒冷，健壮而精神。99：钢铁之躯，能够承受大量伤痛。人类极限。140：超越人类的体质（如大象）。200+：怪物之体，免疫大多数地球疾病",
        "0：无人协助便无法移动。15：迟缓，协调性差，难以完成精密操作。50：普通人的敏捷。90：迅捷，灵活，能够胜任紧密操作（如杂技演员，出色的舞者）。99：世界级运动员，人类极限。120：超越人类之速（如老虎）。200+：闪电之速，行动之迅捷远超人类理解之外。",
        "0：不堪入目，他人将对其抱有恐惧、厌恶或怜悯。15：丑陋，或许曾因故毁容或先天缺陷。50：普通人的外貌。90：你所见过的最迷人的人之一，具有先天吸引力。99：美和酷的顶点（超模或世界级影星）。人类极限",
        "0：精神衰弱，缺乏意志力，毫无魔法潜能。15：意志薄弱，容易被更具智慧或意志力的人左右。50：普通人的意志。90：意志坚强，有动力，具有较高潜力来沟通魔法与不可视之物。100：钢铁意志，与心灵‘秘境’和不可视世界具有紧密连接。 140：超越人类，或许是神话存在。210+：滔天魔法潜能，超乎人类理解的伟岸意志",
        "1：婴儿（1-12磅/1-6kg）。15：儿童，身材矮小（侏儒）（33磅/15kg）。65：普通人的体型（中等身高体重）（170磅/75kg）。80：高大，壮硕，或肥胖（240磅/110kg）。99：在某一方面算是超大号（330磅/150kg）。150：马或牛（960磅/440kg）。180：有史以来最重的人类（1400磅/640kg）。200+：1920 磅/872kg",
        "0：新生婴儿。15：未曾受过任何类型的教育。60：高中毕业。70：大学毕业（学士学位）。80：研究生毕业（硕士学位）。90：博士，教授。96：某一领域的世界级权威。99：人类极限。",
        "0：没有智力，无法理解身边的世界。15：学习速度慢，只能完成最基础的数学运算或阅读初学者级别的书籍。50：普通人的智力。90：才思敏捷，很可能理解多种语言或定理。99：天才（爱因斯坦，达芬奇，特斯拉等）。人类极限。140：超越人类之智"]


    const [form_att] = Form.useForm()
    const [form_info] = Form.useForm()
    const [form_bj] = Form.useForm()

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
            setPcInfo(data)
            info2form(data)
        }
    }

    useEffect(() => {
        if (pcid !== "") {
            get_data(pcid)
        }
    }, []);


    // 检查信息是否可提交
    const check_info = function (pc: InfoModal) {
        var errortxt = ""
        // 1、技能
        for (let i = 0; i < attlist.length; i++) {
            var att = attlist[i]
            if ("attribute" in pc && (pc["attribute"][att] > 100 || pc["attribute"][att] < 15)) {
                errortxt = "属性" + att + "应在15-100之间\n"
                return errortxt
            }
        }
        if (pc.attribute.体型 + pc.attribute.体质 + pc.attribute.力量 + pc.attribute.外貌 + pc.attribute.智力 + pc.attribute.意志 + pc.attribute.敏捷 + pc.attribute.教育 > pointAtt && form_att.getFieldValue("att_style") === "gd") {
            errortxt = "属性超额使用"
            return errortxt
        }
        // 2、技能
        var findxinyong = false
        var skl = pc['skill']
        for (var i = 0; i < skl.length; i++) {
            var sk = skl[i]
            if (sk.interPoint + sk.workPoint + sk.defaultPoint > 100) {
                errortxt = "技能" + sk + "的加值总额应在100以内\n"
                return errortxt
            }
            // if (sk.name === "信用评级" && (sk.workPoint===0)) {
            //     errortxt = "信用评级不能为0，建议在" + moneyshow[0] + "到" +  moneyshow[1] +"之间"
            //     return errortxt
            // }
        }

        if (pointSkills[0] - pointSkillUse[0] > 50 || pointSkills[1] - pointSkillUse[1] > 50) {
            errortxt += "还有好多技能点没有分配！\n"
            return errortxt
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

    // 提交主入口函数
    const commitFun = function () {
        // const pc = pcInfo

        // 技能和武器赋值
        // var sklist: { [key: string]: number } = {}
        // for (let i = 0; i < skill.length; i++) {
        //   if (skill[i].interPoint === 0 && skill[i].workPoint === 0 && !(["闪避", "母语"].includes(skill[i].name))) { }
        //   else { sklist[skill[i].showName] = skill[i].defaultPoint + skill[i].workPoint + skill[i].interPoint }
        // }

        // pc['skill'] = skill
        // pc["skill_work"] = skillwork


        // var wplist: { [key: string]: number } = {}
        // for (let i = 0; i < weaponUse.length; i++) {
        //     wplist[weaponUse[i]["名称"]] = weaponUse[i]
        // }

        // pc['weapon'] = weaponUse
        const pc = form2info()

        const errortxt = check_info(pc)

        if (errortxt !== "ok") {
            Toast.show({
                content: errortxt
            })
        } else {
            completeFun(pc)
        }
    }

    const setAttFun = function (value: any) {
        setAttType(value)
    }
    // 生成随机属性
    const addAttDice = function () {
        var d = [dice(3, 6) * 5, dice(3, 6) * 5, dice(3, 6) * 5, dice(3, 6) * 5, dice(3, 6) * 5, dice(2, 6) * 5 + 30, dice(2, 6) * 5 + 30, dice(2, 6) * 5 + 30]
        var attdice_ = [...attDice]
        attdice_.push(d)
        var t = attTime - 1
        setAttDice(attdice_)
        setAttTime(t)
    }
    // 设置幸运
    const setLuckFun = function () {
        if (luckTime <= 0) { return }
        var luck_ = dice(3, 6) * 5
        form_att.setFieldValue("幸运", luck_)
        setLuckTime(luckTime - 1)
        form2info()
    }
    // 设置职业
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
                // if(skillname=="自定义"){
                //     continue
                // }
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
                    ensurePoint: 0,
                    ensure: false,
                    levelup: skill_default[skillname].levelup,
                }
                skill_this.push(_skill)
            }
        }
        // 根据职业，生成本职职业，并处理职业清单
        var skillWork: SkillWorkModal[] = []
        var workname: string = value[1]
        var myword = work_default[workname]
        var myskill = myword["skill"]
        for (var i = 0; i < myskill.length; i++) {
            // 情况一：写明了的技能
            if ('name' in myskill[i]) {
                const myskill_name: { name: string; sub_name?: string | undefined; } = myskill[i] as { name: string; sub_name?: string | undefined; }
                var sw: SkillWorkModal = { index: -1 }
                sw.name = myskill_name["name"]
                // 分别处理带子类型和不带子类型的可能
                if ('sub_name' in myskill_name) {
                    sw['sub_name'] = myskill_name.sub_name
                    sw['showname'] = myskill_name.name + ":" + myskill_name.sub_name

                    var index_name = get_fromlist_subdiff(skill_this, sw['name'], 'name')
                    if (index_name < 0) {
                        console.log("意料之外的初始技能！", sw['showname'])
                    }
                    skill_this[index_name] = {
                        name: sw['name'],
                        sub: false,
                        subName: sw['sub_name'],
                        showName: sw['showname'],
                        work: true,
                        defaultPoint: skill_this[index_name].defaultPoint,
                        workPoint: 0,
                        interPoint: 0,
                        ensurePoint: 0,
                        ensure: false,
                        levelup: skill_this[index_name].levelup,
                    }
                    sw['index'] = index_name
                } else {
                    sw['showname'] = myskill_name.name
                    var index_show = get_fromlist(skill_this, sw['showname'], 'showName')
                    if (index_show < 0) {
                        console.log("意料之外的初始技能！", sw['showname'])
                    }
                    skill_this[index_show].work = true
                    sw['index'] = index_show
                }

                skillWork.push(sw)
            } else {
                // 情况二，多选
                const myskill_number: { number: number, area: string, list?: any } = myskill[i] as { number: number, area: string, list?: any }
                // var skillall = []
                // for (var xx = 0; xx < skill_this.length; xx++) {
                //     if (!skill_this[xx].work && skill_this[xx].levelup) {
                //         skillall.push({ 'name': skill_this[xx].showName })
                //     }
                // }
                for (let j = 0; j < myskill_number.number; j++) {
                    var sw: SkillWorkModal = { index: -1 }

                    if (myskill_number.area === "list") {
                        for (let sknum = 0; sknum < myskill_number.list.length; sknum++) {
                            if ("sub_name" in myskill_number.list[sknum]) {
                                const showname = myskill_number.list[sknum].name + ":" + myskill_number.list[sknum].sub_name
                                const index_skill = get_fromlist_nosub(skill_this, myskill_number.list[sknum].name)
                                skill_this[index_skill].subName = myskill_number.list[sknum].sub_name
                                skill_this[index_skill].showName = showname
                                skill_this[index_skill].sub = false
                            }
                        }
                        sw['select_list'] = myskill_number.list
                    } else {
                        sw['select_list'] = []
                    }
                    skillWork.push(sw)
                }
            }
        }

        setSkillwork(skillWork)
        cal_skill(workname, skill_this, pcInfo)

        var money = myword["信用评级"]
        setMoneyshow(money)

        setPointSkillUse([0, 0])
        form_info.setFieldValue("职业", workname)
        form2info()

        setVisibleWork(false)
    }
    // 设置武器
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
    // 删除武器
    const delWeaponUse = function (value: number) {
        var weaponlist_ = weaponUse
        const weaponlist = weaponlist_.filter((_, i) => i !== value)
        setWeaponUse(weaponlist)
    }
    // 选择技能(在pickle里面确定)
    const setSkillSub = function (value: any, type = "work") {
        if (type === "work") {
            var skill_ = value[0]
            var index = -1
            for (var i = 0; i < skill.length; i++) {
                if (skill[i].showName === skill_ && skill[i].work === false) {
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
            skillnew[pickleIndex].showName = skillnew[pickleIndex].name + ":" + skillnew[pickleIndex].subName
            setSkill(skillnew)
        }

    }
    // 选择本职技能
    const startSetSkillSub = function (itemwork: { [key: string]: any; }, index: number) {
        var value = itemwork["select_list"]
        var data = []
        if (value.length === 0) {
            for (var xx = 0; xx < skill.length; xx++) {
                if (!skill[xx].work && skill[xx].levelup) {
                    data.push({ label: skill[xx].showName, value: skill[xx].showName })
                }
            }
        } else {
            for (let i = 0; i < value.length; i++) {

                if ("sub_name" in value[i]) {
                    const showname = value[i].name + ":" + value[i].sub_name
                    const skindex = get_fromlist_subdiff(skill, showname, "showName")
                    if (skindex >= 0) {
                        data.push({ 'label': showname, value: showname })
                    }
                } else {
                    const name = value[i].name
                    const skindex = get_fromlist_subdiff(skill, name, "name")
                    if (skindex >= 0) {
                        data.push({ 'label': name, value: name })
                    }
                }
                // data.push({ label: value[i].name, value: value[i].name })
            }
        }

        setPickleIndex(index)
        setPickleData([data])
        setPickleVisible(true)
    }
    // 选择技能子技能
    const startSetSkillSubAny = function (skillsubs: any, index: number) {
        var data = []
        for (let i = 0; i < skillsubs.length; i++) {
            data.push({ label: skillsubs[i], value: skillsubs[i] })
        }
        setPickleIndex(index)
        setPickleSubData([data])
        setPickleSubVisible(true)
    }
    // 按照类型获取技能列表
    const getSkillFromType = function (skill: SkillModal[], type: string[]) {
        var skillResult = []
        for (var i = 0; i < skill.length; i++) {
            if (type.indexOf(skill[i].name) >= 0) {
                skillResult.push({ skillInfo: skill[i], index: i })
            }
        }
        return skillResult
    }
    // 获取自定义技能列表
    const getSkillSelf = function (skill: SkillModal[]) {
        var skillResult = []
        for (var i = 0; i < skill.length; i++) {
            if (skill[i].self) {
                skillResult.push({ skillInfo: skill[i], index: i })
            }
        }
        return skillResult
    }
    // 获取所有点了点的技能
    const getSkillHaveAdd = function (skill: SkillModal[]) {
        var skillResult = []
        for (var i = 0; i < skill.length; i++) {
            if (skill[i].interPoint != 0 || skill[i].workPoint != 0) {
                skillResult.push({ skillInfo: skill[i], index: i })
            }
        }
        return skillResult
    }
    // 设置已使用的技能点
    const setWorkPoint = function (val: any, index: number) {
        var skill_bak = skill
        if (val) {
            skill_bak[index].workPoint = +val
        } else {
            skill_bak[index].workPoint = 0
        }
        if (skill_bak[index].name === "信用评级") {
            get_money_status(+val)
        }
        var pointuse_ = [0, 0]
        for (var i = 0; i < skill.length; i++) {
            pointuse_[0] += skill[i].workPoint
            pointuse_[1] += skill[i].interPoint
        }
        setPointSkillUse(pointuse_)
        setSkill(skill_bak)
    }

    const setIntePoint = function (val: any, index: number) {
        var skill_bak = skill
        if (val) {
            skill_bak[index].interPoint = +val
        } else {
            skill_bak[index].interPoint = 0
        }
        var pointuse_ = [0, 0]
        for (var i = 0; i < skill.length; i++) {
            pointuse_[0] += skill[i].workPoint
            pointuse_[1] += skill[i].interPoint
        }
        setPointSkillUse(pointuse_)
        setSkill(skill_bak)
    }
    // 设置武器的昵称
    const setWeaponName = function (value: any, index: number) {
        const w = weaponUse
        if (value) {
            w[index].名称 = value
        } else {
            w[index].名称 = "无名武器"
        }

        setWeaponUse(w)
    }


    // 计算衍生属性
    const cal_value = function (pcnew: AttModal, Cocskill: number = 0) {
        var attex: AttExModal = { HP: 0, HP_MAX: 0, MP: 0, MP_MAX: 0, SAN: 0, SAN_MAX: 0, 体格: 0, DB: "0", MOV: 0 }
        attex["HP_MAX"] = Math.floor((pcnew["体质"] + pcnew["体型"]) / 10)
        attex["HP"] = attex["HP_MAX"]
        attex["MP_MAX"] = Math.floor(pcnew["意志"] / 5)
        attex["MP"] = attex["MP_MAX"]
        attex["SAN_MAX"] = 99 - Cocskill
        attex["SAN"] = Math.floor(pcnew["意志"])
        attex["MOV"] = (pcnew["力量"] < pcnew["体型"] && pcnew["敏捷"] < pcnew["体型"]) ? 7 : ((pcnew["力量"] >= pcnew["体型"] && pcnew["敏捷"] >= pcnew["体型"]) ? 9 : 8)
        var db = pcnew["力量"] + pcnew["体型"]
        attex["体格"] = db < 65 ? -2 : (db < 85 ? -1 : (db >= 205 ? Math.floor((db - 205) / 80) + 3 : Math.floor((db - 85) / 40)))
        attex["DB"] = attex['体格'] === -2 ? "-2" : (attex['体格'] === -1 ? "-1" : (attex['体格'] === 0 ? "0" : (attex['体格'] === 1 ? "+1D4" : (attex['体格'] === 2 ? "+1D6" : "+" + (attex['体格'] - 1).toString() + "D6"))))
        return attex
    }
    // 计算技能点
    const cal_skill_point = function (workname: string, pc: InfoModal) {
        var myword = work_default[workname]
        var pointswork = 0
        for (var i = 0; i < myword['workPoints'].length; i++) {
            pointswork += myword['workPoints'][i]['att'].length == 1 ? pc["attribute"][myword['workPoints'][i]['att'][0]] * myword['workPoints'][i]["scale"] : Math.max(pc["attribute"][myword['workPoints'][i]['att'][0]], pc["attribute"][myword['workPoints'][i]['att'][1]]) * myword['workPoints'][i]["scale"]
        }
        setPointSkills([pointswork, pc["attribute"]["智力"] * 2])

    }
    // 计算已用点数
    const cal_skill_use = function (pc: InfoModal) {
        var pointuse_ = [0, 0]
        const skill = pc.skill
        for (var i = 0; i < skill.length; i++) {
            pointuse_[0] += skill[i].workPoint
            pointuse_[1] += skill[i].interPoint
        }
        setPointSkillUse(pointuse_)
    }


    // 计算技能相关
    const cal_skill = function (workname: string, skill_this: SkillModal[], pc: InfoModal) {
        // 技能点和技能初始值
        cal_skill_point(workname, pc)
        skill_this[get_fromlist(skill_this, "闪避", "name")].defaultPoint = Math.floor(pc["attribute"]["敏捷"] / 2)
        skill_this[get_fromlist(skill_this, "母语", "name")].defaultPoint = Math.floor(pc["attribute"]["教育"])
        setSkill(skill_this)
    }

    // 数据从列表到INFO
    const form2info = function () {
        const pc: InfoModal = { ...pcInfo }
        // 第一页
        const att_ = form_att.getFieldsValue(true)
        attlist.map((item, index) => (
            pc.attribute[item] = +att_[item]
        ))
        pc.attribute.幸运 = +att_.幸运
        // 第二页
        const info_ = form_info.getFieldsValue(true)
        pc.name = info_.name ? info_.name : ""
        pc.职业 = info_.职业 ? info_.职业 : ""
        pc.info.sex = info_["sex"] ? info_["sex"] : ""
        pc.info.age = info_["age"] ? info_["age"] : 0
        pc.info.whereborn = info_["whereborn"] ? info_["whereborn"] : ""
        pc.info.wherelive = info_["wherelive"] ? info_["wherelive"] : ""
        pc.info.time = info_["time"] ? info_["time"] : ""
        // 第三页-skill
        pc.skill = skill
        pc.skill_work = skillwork
        // 第四页-story
        const story_ = form_bj.getFieldsValue(true)
        pc.story.个人介绍 = story_.个人介绍 ? story_.个人介绍 : ""
        pc.story.宝贵之物 = story_.宝贵之物 ? story_.宝贵之物 : ""
        pc.story.形象描述 = story_.形象描述 ? story_.形象描述 : ""
        pc.story.思想信念 = story_.思想信念 ? story_.思想信念 : ""
        pc.story.意义非凡之地 = story_.意义非凡之地 ? story_.意义非凡之地 : ""
        pc.story.法术 = story_.法术 ? story_.法术 : ""
        pc.story.第三类接触 = story_.第三类接触 ? story_.第三类接触 : ""
        pc.story.精神状况 = story_.精神状况 ? story_.精神状况 : ""
        pc.story.重要之人 = story_.重要之人 ? story_.重要之人 : ""
        pc.story.魔法物品与典籍 = story_.魔法物品与典籍 ? story_.魔法物品与典籍 : ""
        pc.story.特质 = story_.特质 ? story_.特质 : ""
        // 第五页-武器
        pc.weapon = weaponUse
        pc.item = story_.item ? story_.item : ""
        pc.CR.CR = story_.CR
        pc.CR.消费水平 = story_.消费水平
        pc.CR.现金 = story_.现金
        pc.CR.资产 = story_.资产
        // 衍生属性
        pc.attex = cal_value(pc.attribute)
        setPcInfo(pc)
        console.log(pc)
        return pc
    }

    // 从INFO同步到列表
    const info2form = function (pc: InfoModal) {
        // 第一页
        form_att.setFieldsValue({ ...pc.attribute, ...{ att_style: "gd" } })
        // 第二页
        form_info.setFieldsValue({ ...{ name: pc.name, 职业: pc.职业 }, ...pc.info })
        // 第三页-skill
        setSkill(pc.skill)
        setSkillwork(pc.skill_work)
        // 第四页-story
        form_bj.setFieldsValue({ ...{ "item": pc.item, }, ...pc.story, ...pc.CR })
        // 第五页-武器
        setWeaponUse(pc.weapon)
        // 其他显示字段
        cal_skill_point(pc.职业, pc)
        cal_skill_use(pc)
        return true
    }

    // 赋值，赋值到INFO
    const set_pcinfo = function (value: any, allvalue: { [key: string]: any }) {
        if (allvalue['att_style'] === "sj") {
            if ('att' in allvalue && allvalue['att'] >= 0 && attDice.length > 0) {
                var al = attDice[allvalue['att']]
                for (var i = 0; i < attlist.length; i++) {
                    form_att.setFieldValue(attlist[i], al[i])
                }
            } else {
                for (var i = 0; i < attlist.length; i++) {
                    form_att.setFieldValue(attlist[i], 0)
                }
            }
        }
        const pc_ = form2info()

        if (pcInfo.职业) {
            cal_skill(pcInfo.职业, skill, pc_)
        }
    }

    const setzero2space = function (data: AttModal) {
        const d: { [key: string]: any } = {}
        d.力量 = data.力量 ? data.力量 : ""
        d.体型 = data.体型 ? data.体型 : ""
        d.体质 = data.体质 ? data.体质 : ""
        d.外貌 = data.外貌 ? data.外貌 : ""
        d.幸运 = data.幸运 ? data.幸运 : ""
        d.意志 = data.意志 ? data.意志 : ""
        d.敏捷 = data.敏捷 ? data.敏捷 : ""
        d.教育 = data.教育 ? data.教育 : ""
        d.智力 = data.智力 ? data.智力 : ""
        return d
    }
    // 创建自定义技能
    const addSkillSelf = function () {
        const sk = skill
        const sw = {
            name: "",
            showName: "",
            sub: false,
            work: false,
            defaultPoint: 0,
            workPoint: 0,
            interPoint: 0,
            ensurePoint: 0,
            levelup: true,
            ensure: false,
            self: true,
        }
        sk.push(sw)
        setSkill(sk)
        setIntePoint(0, sk.length - 1)
    }
    // 设置自定义技能名称
    const setSkillName = function (index: number, value: string) {
        const sk = skill
        sk[index].name = value
        sk[index].showName = value
        setSkill(sk)
    }


    function Selfskillpage() {
        return (
            <>
                {
                    getSkillSelf(skill).map((value, index) => (
                        <>
                            <Grid.Item
                                className={styles.griditem} onClick={(skill[value.index].sub) ? (() => startSetSkillSubAny(skill[value.index].subList, value.index)) : (() => { })}
                                style={{ backgroundColor: "rgba(250,150,10," + ((skill[value.index].workPoint + skill[value.index].defaultPoint + skill[value.index].interPoint) / 100).toString() + ")" }}
                                key={index + "1"}
                            >

                                <div className={styles.skilltext} style={{ "color": (skill[value.index].sub && !skill[value.index].subName) ? "darkblue" : "black" }}>

                                    {/* {skill[value.index].sub ? (skill[value.index].name + ":" + (skill[value.index].subName ? skill[value.index].subName : "未选择")) : skill[value.index].showName} */}
                                    <div style={{ marginTop: "4px", marginLeft: "4px", marginRight: "4px", backgroundColor: "lightblue" }}>
                                        <Input defaultValue={skill[value.index].name} onChange={(v) => { setSkillName(value.index, v) }} placeholder="输入名称" style={{ '--text-align': 'center', "--placeholder-color": "gray" }} />
                                    </div>
                                    ({skill[value.index].defaultPoint})[{skill[value["index"]].defaultPoint + skill[value["index"]].workPoint + skill[value["index"]].interPoint}]

                                </div>

                            </Grid.Item>

                            <Grid.Item className={styles.griditem}
                                style={{ backgroundColor: "rgba(250,150,10," + (skill[value["index"]].workPoint / (100 - skill[value["index"]].defaultPoint)).toString() + ")" }}
                                key={index + "2"}
                            ><div className={styles.skillinput} >
                                    {skill[value.index].levelup && skill[value.index].work ?
                                        <Stepper step={5} defaultValue={0} min={0} max={100 - skill[value.index].defaultPoint - skill[value.index].interPoint} value={skill[value.index].workPoint} onChange={val => setWorkPoint(val, value.index)} />
                                        : <></>}
                                </div></Grid.Item>
                            <Grid.Item className={styles.griditem}
                                style={{ backgroundColor: "rgba(250,150,10," + (skill[value["index"]].interPoint / (100 - skill[value["index"]].defaultPoint)).toString() + ")" }}
                                key={index + "3"}
                            ><div className={styles.skillinput} >
                                    {skill[value.index].levelup && skill[value.index].name !== "信用评级" ?
                                        <Stepper step={5} defaultValue={0} min={0} max={100 - skill[value.index].defaultPoint - skill[value.index].workPoint} value={skill[value.index].interPoint} onChange={val => setIntePoint(val, value.index)} />
                                        : <></>}
                                </div></Grid.Item>
                        </>
                    ))
                }
            </>
        )
    }

    // 获取本职技能点描述
    const get_des_skillpoint = function (l: any) {
        var result = ""
        for (var i = 0; i < l.length; i++) {
            const r = l[i]
            var name = ""
            if (r.att.length === 1) {
                name = r.att[0]
            } else {
                for (var j = 0; j < r.att.length; j++) {
                    if (name.length === 0) {
                        name = name + r.att[j]
                    } else {
                        name = name + "或" + r.att[j]
                    }
                }
            }
            if (result.length == 0) {
                result = result + name + "×" + r.scale
            } else {
                result = result + "+" + name + "×" + r.scale
            }
        }
        return result
    }
    // 获取经济状况
    const get_money_status = function (value = -1) {
        var result = 0
        if (value < 0) {
            for (var i = 0; i < skill.length; i++) {
                if (skill[i].name === "信用评级") {
                    result = skill[i].defaultPoint + skill[i].workPoint + skill[i].ensurePoint
                }
            }
        } else {
            result = value
        }
        var 生活水平 = ""
        if (result === 0) { 生活水平 = "赤贫" }
        else if (result < 10) { 生活水平 = "贫穷" }
        else if (result < 50) { 生活水平 = "标准" }
        else if (result < 90) { 生活水平 = "小康" }
        else if (result < 99) { 生活水平 = "富裕" }
        else { 生活水平 = "豪富" }

        const time: string = form_info.getFieldValue("time")

        form_bj.setFieldsValue({
            CR: 生活水平,
            资产: "$" + CR_default[time][生活水平]["资产"] * result,
            现金: "$" + CR_default[time][生活水平]["现金"] * result,
            消费水平: "$" + CR_default[time][生活水平]["消费水平"],
        })

        return { CR: result, 生活水平: 生活水平 }
    }

    // 技能成长
    const get_skilllist_ai = function () {
        const skill_select: number[] = []
        if (activeKey === "本职") {
            for (let i = 0; i < skillwork.length; i++) {
                if (skillwork[i].index >= 0) {
                    skill_select.push(skillwork[i].index)
                }
            }
        } else if (activeKey === "其他") {
            for (let i = 0; i < skill.length; i++) {
                if (skill_option[skill_option.length - 1].sub.indexOf(skill[i].name) >= 0 || skill[i].self) {
                    skill_select.push(i)
                }
            }
        } else if (activeKey === "已点技能") {
            for (let i = 0; i < skill.length; i++) {
                if (skill[i].interPoint > 0 || skill[i].workPoint > 0) {
                    skill_select.push(i)
                }
            }
        } else {
            var index = -1
            for (let i = 0; i < skill_option.length; i++) {
                if (skill_option[i].name == activeKey) {
                    index = i
                    break
                }
            }
            if (index >= 0) {
                const skop = skill_option[index]
                for (let j = 0; j < skill.length; j++) {
                    if (skop.sub.indexOf(skill[j].name) >= 0) {
                        skill_select.push(j)
                    }
                }
            }
        }
        return skill_select
    }

    const setEnsureSkill = (index: number, v: string) => {
        const sk = skill
        sk[index].ensurePoint = +v
        setSkill(sk)
    }

    function PopSkillUp() {
        const ssIndex = get_skilllist_ai()

        return (<>
            <Collapse>
                <Collapse.Panel key='1' title='技能成长'>
                    技能成长一般发生在游戏过程中，成功使用技能后根据主持人裁定可以选择进行成长。
                </Collapse.Panel>
            </Collapse>
            <div>
                <Grid columns={2}>
                    {
                        ssIndex.map((item) => (
                            <Grid.Item className={styles.upgriditem} key={item}>
                                <div className={styles.upgridtitle}>{skill[item].showName}({skill[item].defaultPoint})</div>
                                <Input
                                    type="number"
                                    style={{ backgroundColor: "lightgray", width: "48px" }}
                                    defaultValue={skill[item].ensurePoint > 0 ? skill[item].ensurePoint.toString() : ""}
                                    onChange={(v) => { setEnsureSkill(item, v) }}
                                />

                            </Grid.Item>
                        ))
                    }
                </Grid>
            </div>
        </>)
    }
    return (
        <>

            <Cascader options={work_options} visible={visibleWork} onClose={() => { setVisibleWork(false) }} onSelect={setWorkFun} />
            <Cascader options={weapon_options} visible={visibleWeapon} onClose={() => { setVisibleWeapon(false) }} onSelect={setWeaponFun} />
            <Picker columns={pickleData} visible={pickleVisible}
                onClose={() => { setPickleVisible(false) }}
                onConfirm={v => { setSkillSub(v, "work") }}
                destroyOnClose={true}
            />
            <Picker columns={pickleSubData} visible={pickleSubVisible}
                onClose={() => { setPickleSubVisible(false) }}
                onConfirm={v => { setSkillSub(v, "sub") }}
                destroyOnClose={true}
            />

            <Popup
                visible={popSwitch}

                onMaskClick={() => {
                    setPopSwitch(false)
                }}
                onClose={() => {
                    setPopSwitch(false)
                }}
                destroyOnClose={true}
            >
                <PopSkillUp />
            </Popup>


            <Tabs>
                <Tabs.Tab title="基础属性" key="att-key">
                    <Form
                        form={form_att}
                        layout='horizontal'
                        onValuesChange={set_pcinfo}
                        initialValues={{ ...{ "att_style": "gd" }, ...setzero2space(pcInfo.attribute) }}
                    >
                        <Form.Header>基本属性</Form.Header>
                        <Form.Item name='att_style' label='属性方式'>
                            <Radio.Group onChange={setAttFun}>
                                <Space direction='vertical'>
                                    <Radio value='gd'>购点({pointAtt})</Radio>
                                    <Radio value='sj'>随机({attTime}次)</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>

                        {
                            attType == 'gd' ?
                                <Form.Header>
                                    <text style={{ color: pcInfo.attribute.体型 + pcInfo.attribute.体质 + pcInfo.attribute.力量 + pcInfo.attribute.外貌 + pcInfo.attribute.意志 + pcInfo.attribute.敏捷 + pcInfo.attribute.教育 + pcInfo.attribute.智力 > pointAtt ? "red" : "" }}>
                                        属性点总值:{pcInfo.attribute.体型 + pcInfo.attribute.体质 + pcInfo.attribute.力量 + pcInfo.attribute.外貌 + pcInfo.attribute.意志 + pcInfo.attribute.敏捷 + pcInfo.attribute.教育 + pcInfo.attribute.智力} / {pointAtt}
                                    </text>
                                </Form.Header>
                                :
                                <Form.Header>请选择你想要的属性</Form.Header>
                        }

                        <Form.Item name='att' label='属性选择' hidden={attType === 'gd'} layout='vertical' >
                            <Radio.Group>
                                <Space direction='vertical'>
                                    {
                                        attDice.map((value, index) => (
                                            <Radio value={index} key={index}>
                                                【属性总值：{value.reduce((accumulator, current) => { return accumulator + current; }, 0)}】<br />
                                                💪力量{value[0]} ❤️体质{value[1]} 🐇敏捷{value[2]} 🌼外貌{value[3]}<br />
                                                🌞意志{value[4]} 👩‍👦体型{value[5]} 🎓教育{value[6]} 🧠智力{value[7]}
                                            </Radio>))
                                    }
                                </Space>
                            </Radio.Group>
                        </Form.Item>


                        {attlist.map((value, index) => (
                            <Form.Item key={index} name={value} label={value} rules={[{ required: true }]} hidden={attType !== 'gd'} help={atthelp[index]}>
                                <Input type="number" max={100} min={15} placeholder={"请输入" + value + "15-90"} />
                            </Form.Item>))}

                        {attType === 'gd' ? <></> :
                            <div style={{ display: "flex", "width": "100%", justifyContent: "center", padding: "16px" }}>
                                <Button color='success' size='large' style={{ "width": "90%" }} onClick={addAttDice} disabled={attTime <= 0}>生成(剩余{attTime}次)</Button>
                            </div>
                        }

                        <Form.Header>衍生属性</Form.Header>
                        <Grid columns={3} style={{ backgroundColor: "#FFFFFF" }}>
                            <Grid.Item className={styles.exgriditem}>
                                <div className={styles.exgridone1}>
                                    <div className={styles.exgridone}>
                                        <div className={styles.title}>HP</div>
                                        <div className={styles.text}>{pcInfo.attex.HP} / {pcInfo.attex.HP_MAX}</div>
                                    </div>
                                </div>
                            </Grid.Item>
                            <Grid.Item className={styles.exgriditem}>
                                <div className={styles.exgridone1}>
                                    <div className={styles.exgridone}>
                                        <div className={styles.title}>MP</div>
                                        <div className={styles.text}>{pcInfo.attex.MP} / {pcInfo.attex.MP_MAX}</div>
                                    </div>
                                </div>
                            </Grid.Item>
                            <Grid.Item className={styles.exgriditem}>
                                <div className={styles.exgridone1}>
                                    <div className={styles.exgridone}>
                                        <div className={styles.title}>SAN</div>
                                        <div className={styles.text}>{pcInfo.attex.SAN} / {pcInfo.attex.SAN_MAX}</div>
                                    </div>
                                </div>
                            </Grid.Item>
                            <Grid.Item className={styles.exgriditem}>
                                <div className={styles.exgridone1}>
                                    <div className={styles.exgridone}>
                                        <div className={styles.title}>移动速度</div>
                                        <div className={styles.text}>{pcInfo.attex.MOV}</div>
                                    </div>
                                </div>
                            </Grid.Item>
                            <Grid.Item className={styles.exgriditem}>
                                <div className={styles.exgridone1}>
                                    <div className={styles.exgridone}>
                                        <div className={styles.title}>伤害加值</div>
                                        <div className={styles.text}>{pcInfo.attex.DB}</div>
                                    </div>
                                </div>
                            </Grid.Item>
                            <Grid.Item className={styles.exgriditem}>
                                <div className={styles.exgridone1}>
                                    <div className={styles.exgridone}>
                                        <div className={styles.title}>体格</div>
                                        <div className={styles.text}>{pcInfo.attex.体格}</div>
                                    </div>
                                </div>
                            </Grid.Item>
                        </Grid>


                        <Form.Header>幸运</Form.Header>
                        <Form.Item label='幸运' name="幸运" rules={[{ required: true }]} extra={<Button color='success' onClick={setLuckFun} disabled={luckTime <= 0}>随机(剩余{luckTime}次)</Button>}>
                            <Input placeholder='请输入' readOnly value={pcInfo.attribute.幸运.toString()} />
                        </Form.Item>
                    </Form>
                </Tabs.Tab>

                <Tabs.Tab title="角色信息" key="info-key">
                    <Form
                        form={form_info}
                        layout='horizontal'
                        initialValues={{ ...{ "sex": "男", "time": "1920s" } }}
                    // initialValues={{ ...{ "name": pcInfo.name, "职业": pcInfo.职业 }, ...pcInfo.info }}
                    >
                        <Form.Header>角色信息</Form.Header>
                        <Form.Item name='name' label='姓名' rules={[{ required: true, message: '姓名不能为空' }]}>
                            <Input placeholder='请输入姓名' />
                        </Form.Item>
                        <Form.Item name='sex' label='性别' >
                            <Radio.Group>
                                <Radio value='男'>男</Radio>
                                <Radio value='女'>女</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name='age' label='年龄' >
                            <Input placeholder='年龄' />
                        </Form.Item>
                        <Form.Item name='time' label='时代' >
                            {/* <Input placeholder='时代' /> */}
                            <Radio.Group>
                                <Radio value='1920s'>1920s</Radio>
                                <Radio value='现代'>现代</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name='wherelive' label='住地' >
                            <Input placeholder='住地' />
                        </Form.Item>
                        <Form.Item name='whereborn' label='故乡' >
                            <Input placeholder='故乡' />
                        </Form.Item>
                        <Form.Item label='职业' name='职业' rules={[{ required: true, message: '职业必须选择' }]} onClick={() => setVisibleWork(true)} >
                            <Input placeholder="请选择" readOnly />
                        </Form.Item>
                        {
                            pcInfo.职业 ?
                                <>
                                    <Form.Header>职业信息-{pcInfo.职业}</Form.Header>
                                    <Form.Item label='信用评级范围'>
                                        <Input readOnly value={"[" + moneyshow[0] + "—" + moneyshow[1] + "]"} />
                                    </Form.Item>
                                    <Form.Item label='本职技能' layout='horizontal'>
                                        <TextArea readOnly value={work_default[pcInfo.职业]["describe"]} autoSize={{ minRows: 3, maxRows: 5 }} />
                                    </Form.Item>
                                    <Form.Item label='本职技能点' >
                                        <Input readOnly value={get_des_skillpoint(work_default[pcInfo.职业]["workPoints"])} />
                                    </Form.Item>
                                    <Form.Item label='兴趣技能点' >
                                        <Input readOnly value="智力×2" />
                                    </Form.Item>
                                </>
                                : <></>
                        }




                    </Form>
                </Tabs.Tab>

                <Tabs.Tab title="技能加点" key="skill-key">
                    <div>
                        {
                            pcInfo["职业"] ?
                                <div className={styles.container} >
                                    <SideBar activeKey={activeKey} onChange={setActiveKey}>
                                        {skill_option.map(item => (
                                            <SideBar.Item key={item.name} title={item.name} />
                                        ))}
                                        <SideBar.Item key={"已点技能"} title={"已点技能"} />
                                    </SideBar>
                                    <div style={{ "width": "100%" }}>

                                        {
                                            skill_option.map(item => (
                                                <div hidden={activeKey != item.name} key={item.name}>
                                                    <Grid columns={3} style={{ backgroundColor: "#EEEFFF" }}>
                                                        <Grid.Item className={styles.griditem}>
                                                            <div className={styles.skilltitle}>
                                                                <div>技能名称</div>
                                                                <div>(初始)[最终]</div>
                                                            </div>
                                                        </Grid.Item>
                                                        <Grid.Item className={styles.griditem}>
                                                            <div className={styles.skilltitle} style={{ color: pointSkills[0] < pointSkillUse[0] ? "red" : "black" }}>
                                                                <div>本职技能点</div>
                                                                <div >{pointSkillUse[0]}/{pointSkills[0]}</div>
                                                            </div>

                                                        </Grid.Item>
                                                        <Grid.Item className={styles.griditem} style={{ color: pointSkills[1] < pointSkillUse[1] ? "red" : "black" }}>
                                                            <div className={styles.skilltitle}>
                                                                <div>兴趣技能点</div>
                                                                <div>{pointSkillUse[1]}/{pointSkills[1]}</div>
                                                            </div>
                                                        </Grid.Item>
                                                        {
                                                            item.name === "本职" ?
                                                                skillwork?.map((itemwork, index) => (
                                                                    itemwork["index"] >= 0 ?
                                                                        <>
                                                                            <Grid.Item
                                                                                className={styles.griditem}
                                                                                onClick={(skill[itemwork["index"]].sub) ? (() => startSetSkillSubAny(skill[itemwork["index"]].subList, itemwork["index"])) : (() => { })}
                                                                                style={{ backgroundColor: "rgba(250,150,10," + ((skill[itemwork["index"]].workPoint + skill[itemwork["index"]].defaultPoint + skill[itemwork["index"]].interPoint) / 100).toString() + ")" }}
                                                                                key={index + "1"}
                                                                            >
                                                                                <div className={styles.skilltext} style={{ "color": (skill[itemwork.index].sub && !skill[itemwork.index].subName) ? "darkblue" : "black" }}>
                                                                                    {skill[itemwork["index"]].sub ? (skill[itemwork["index"]].name + ":" + (skill[itemwork["index"]].subName ? skill[itemwork["index"]].subName : "未选择")) :
                                                                                        skill[itemwork["index"]].showName}
                                                                                    {skill[itemwork.index].ensurePoint > 0 ? "☘️" + skill[itemwork.index].ensurePoint : ""}
                                                                                    <br />({skill[itemwork["index"]].defaultPoint})[{skill[itemwork["index"]].defaultPoint + skill[itemwork["index"]].workPoint + skill[itemwork["index"]].interPoint + skill[itemwork["index"]].ensurePoint}]
                                                                                </div>
                                                                            </Grid.Item>
                                                                            <Grid.Item
                                                                                className={styles.griditem}
                                                                                key={index + "2"}
                                                                                style={{ backgroundColor: "rgba(250,150,10," + (skill[itemwork["index"]].workPoint / (100 - skill[itemwork["index"]].defaultPoint)).toString() + ")" }}
                                                                            >
                                                                                <div className={styles.skillinput} >
                                                                                    <Stepper step={5} min={0} max={100 - skill[itemwork["index"]].defaultPoint - skill[itemwork["index"]].interPoint} value={skill[itemwork["index"]].workPoint} onChange={val => setWorkPoint(val, itemwork["index"])}
                                                                                    />
                                                                                </div></Grid.Item>
                                                                            <Grid.Item
                                                                                className={styles.griditem}
                                                                                key={index + "3"}
                                                                                style={{ backgroundColor: "rgba(250,150,10," + (skill[itemwork["index"]].interPoint / (100 - skill[itemwork["index"]].defaultPoint)).toString() + ")" }}
                                                                            >

                                                                                <div className={styles.skillinput} >
                                                                                    {skill[itemwork["index"]].levelup && skill[itemwork["index"]].name !== "信用评级" ?
                                                                                        <Stepper step={5} defaultValue={0} min={0} max={100 - skill[itemwork["index"]].defaultPoint - skill[itemwork["index"]].workPoint} value={skill[itemwork["index"]].interPoint} onChange={val => setIntePoint(val, itemwork["index"])} />
                                                                                        : <></>}
                                                                                </div></Grid.Item>
                                                                        </>
                                                                        : <>
                                                                            <Grid.Item key={index + "3"} className={styles.griditem} onClick={() => startSetSkillSub(itemwork, index)}><div style={{ color: "red" }} className={styles.skilltext}>{"[点击选择]"}<br />({"0"})</div></Grid.Item>
                                                                            <Grid.Item key={index + "4"} className={styles.griditem} ><div className={styles.skillinput} ></div></Grid.Item>
                                                                            <Grid.Item key={index + "5"} className={styles.griditem} ><div className={styles.skillinput} ></div></Grid.Item>
                                                                        </>

                                                                ))
                                                                : getSkillFromType(skill, item.sub).map((value, index) => (
                                                                    <>
                                                                        <Grid.Item
                                                                            key={index + "7"}
                                                                            className={styles.griditem} onClick={(skill[value.index].sub) ? (() => startSetSkillSubAny(skill[value.index].subList, value.index)) : (() => { })}
                                                                            style={{ backgroundColor: "rgba(250,150,10," + ((skill[value.index].workPoint + skill[value.index].defaultPoint + skill[value.index].interPoint) / 100).toString() + ")" }}
                                                                        >

                                                                            <div className={styles.skilltext} style={{ "color": (skill[value.index].sub && !skill[value.index].subName) ? "darkblue" : "black" }}>
                                                                                {skill[value.index].sub ?
                                                                                    (skill[value.index].name + ":" + (skill[value.index].subName ? skill[value.index].subName : "未选择"))
                                                                                    : skill[value.index].showName}{skill[value.index].ensurePoint > 0 ? "☘️" + skill[value.index].ensurePoint : ""}
                                                                                <br />({skill[value.index].defaultPoint})[{skill[value["index"]].defaultPoint + skill[value["index"]].workPoint + skill[value["index"]].interPoint + skill[value["index"]].ensurePoint}]

                                                                            </div>
                                                                        </Grid.Item>

                                                                        <Grid.Item className={styles.griditem} key={index + "8"}
                                                                            style={{ backgroundColor: "rgba(250,150,10," + (skill[value["index"]].workPoint / (100 - skill[value["index"]].defaultPoint)).toString() + ")" }}
                                                                        ><div className={styles.skillinput} >
                                                                                {skill[value.index].levelup && skill[value.index].work ?
                                                                                    // <Input type="number" max={100} min={0} value={skill[value.index].workPoint > 0 ? skill[value.index].workPoint.toString() : ""} onChange={val => setWorkPoint(val, value.index)} /> 
                                                                                    <Stepper step={5} defaultValue={0} min={0} max={100 - skill[value.index].defaultPoint - skill[value.index].interPoint} value={skill[value.index].workPoint} onChange={val => setWorkPoint(val, value.index)} />
                                                                                    : <></>}
                                                                            </div></Grid.Item>
                                                                        <Grid.Item className={styles.griditem} key={index + "9"}
                                                                            style={{ backgroundColor: "rgba(250,150,10," + (skill[value["index"]].interPoint / (100 - skill[value["index"]].defaultPoint)).toString() + ")" }}
                                                                        ><div className={styles.skillinput} >
                                                                                {skill[value.index].levelup && skill[value.index].name !== "信用评级" ?
                                                                                    <Stepper step={5} defaultValue={0} min={0} max={100 - skill[value.index].defaultPoint - skill[value.index].workPoint} value={skill[value.index].interPoint} onChange={val => setIntePoint(val, value.index)} />
                                                                                    : <></>}
                                                                            </div></Grid.Item>
                                                                    </>
                                                                ))
                                                        }
                                                        {
                                                            item.name === "其他" ?
                                                                <Selfskillpage />
                                                                : <></>
                                                        }
                                                        {
                                                            item.name === "其他" ?
                                                                <>
                                                                    <Grid.Item span={3}>
                                                                        <Button block color="primary" onClick={() => { addSkillSelf() }}>新建自定义技能</Button>
                                                                    </Grid.Item>
                                                                </>


                                                                : <></>
                                                        }

                                                    </Grid>


                                                </div>
                                            ))
                                        }
                                        <div hidden={activeKey != "已点技能"} key={"已点技能"}>
                                            <Grid columns={3} style={{ backgroundColor: "#EEEFFF" }}>
                                                <Grid.Item className={styles.griditem}>
                                                    <div className={styles.skilltitle}>名称<br />(初始)[最终]</div>
                                                </Grid.Item>
                                                <Grid.Item className={styles.griditem}>
                                                    <div className={styles.skilltitle} style={{ color: pointSkills[0] < pointSkillUse[0] ? "red" : "black" }}>
                                                        <div>本职技能点</div>
                                                        <div >{pointSkillUse[0]}/{pointSkills[0]}</div>
                                                    </div>

                                                </Grid.Item>
                                                <Grid.Item className={styles.griditem} style={{ color: pointSkills[1] < pointSkillUse[1] ? "red" : "black" }}>
                                                    <div className={styles.skilltitle}>
                                                        <div>兴趣技能点</div>
                                                        <div>{pointSkillUse[1]}/{pointSkills[1]}</div>
                                                    </div>
                                                </Grid.Item>
                                                {
                                                    getSkillHaveAdd(skill).map((value, index) => (
                                                        <>
                                                            <Grid.Item
                                                                key={index + "10"}
                                                                className={styles.griditem} onClick={(skill[value.index].sub) ? (() => startSetSkillSubAny(skill[value.index].subList, value.index)) : (() => { })}
                                                                style={{ backgroundColor: "rgba(250,150,10," + ((skill[value.index].workPoint + skill[value.index].defaultPoint + skill[value.index].interPoint) / 100).toString() + ")" }}
                                                            >
                                                                <div className={styles.skilltext} style={{ "color": (skill[value.index].sub && !skill[value.index].subName) ? "darkblue" : "black" }}>{skill[value.index].sub ? (skill[value.index].name + ":" + (skill[value.index].subName ? skill[value.index].subName : "未选择")) : skill[value.index].showName}<br />({skill[value.index].defaultPoint})[{skill[value["index"]].defaultPoint + skill[value["index"]].workPoint + skill[value["index"]].interPoint}]</div></Grid.Item>
                                                            <Grid.Item className={styles.griditem} key={index + "11"}
                                                                style={{ backgroundColor: "rgba(250,150,10," + (skill[value["index"]].workPoint / (100 - skill[value["index"]].defaultPoint)).toString() + ")" }}>
                                                                <div className={styles.skillinput} >
                                                                    {skill[value.index].levelup && skill[value.index].work ?
                                                                        // <Input type="number" max={100} min={0} value={skill[value.index].workPoint > 0 ? skill[value.index].workPoint.toString() : ""} onChange={val => setWorkPoint(val, value.index)} /> 
                                                                        <Stepper step={5} defaultValue={0} min={0} max={100 - skill[value.index].defaultPoint - skill[value.index].interPoint} value={skill[value.index].workPoint} onChange={val => setWorkPoint(val, value.index)} />
                                                                        : <></>}
                                                                </div></Grid.Item>
                                                            <Grid.Item className={styles.griditem} key={index + "12"}
                                                                style={{ backgroundColor: "rgba(250,150,10," + (skill[value["index"]].interPoint / (100 - skill[value["index"]].defaultPoint)).toString() + ")" }}
                                                            ><div className={styles.skillinput} >
                                                                    {skill[value.index].levelup && skill[value.index].name !== "信用评级" ?
                                                                        // <Input type="number" max={100} min={0} value={skill[value.index].interPoint > 0 ? skill[value.index].interPoint.toString() : ""} onChange={val => setIntePoint(val, value.index)} /> 
                                                                        <Stepper step={5} defaultValue={0} min={0} max={100 - skill[value.index].defaultPoint - skill[value.index].workPoint} value={skill[value.index].interPoint} onChange={val => setIntePoint(val, value.index)} />
                                                                        : <></>}
                                                                </div></Grid.Item>
                                                        </>
                                                    ))
                                                }
                                            </Grid>
                                        </div>
                                        <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
                                            <Button block color="success" onClick={() => setPopSwitch(true)}>技能成长</Button>
                                        </div>

                                    </div>
                                </div>
                                :
                                <div className={styles.skillcant} hidden={pcInfo["职业"] === ""}> 请先确定职业！ </div>
                        }</div>

                </Tabs.Tab>
                <Tabs.Tab title="背景故事" key="story-key">
                    <Form
                        layout='horizontal'
                        form={form_bj}
                    >
                        <Form.Header>背景故事</Form.Header>
                        <Form.Item name='个人介绍' label='个人介绍' help='个人介绍'>
                            <TextArea
                                placeholder='介绍一下角色的过去，与他人的关系，以丰满角色的形象；介绍一下擅长或不擅长的事情——技能属性不同寻常的地方，是你的兴趣爱好，还是先天导致的残疾？'
                                maxLength={100}
                                rows={8}
                                showCount
                            />
                        </Form.Item>
                        <Form.Item name='形象描述' label='形象描述' help='英俊 迷人 邋遢 引人瞩目 疲倦 笨拙 娃娃脸 迟钝 书卷气 胖乎乎 毛发旺盛 优雅 脸色苍白 乐观 古板 强壮 衣着破旧 阴沉 晒黑 羞怯 苗条 矮壮 平凡 皱纹 机智 娇美 魁梧 笨拙 肌肉发达 虚弱'>
                            <TextArea
                                placeholder='一段简短的个人形象穿着的描述'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                        <Form.Item name='思想信念' label='思想信念' help='1. 你崇拜一位大能，会向其献上祈祷（如毗湿奴、耶稣、海尔·塞拉西一世）2. 没有宗教，人们一样能过的很好（如坚定的无神论者、人文主义者、世俗论者）3. 科学终将解释一切。选择一个感兴趣的领域（如进化论、低温学、空间探索）4. 相信命运（如因果报应、社会阶级、迷信）5. 协会或秘密结社的一员（如共济会、妇女协会、匿名者）6. 社会上的罪恶应该被根除。这里罪恶是指什么？（如毒品、暴力、种族偏见）7. 神秘学（如占星术、唯心论、塔罗牌）8. 政治（如保守派、社会主义者、自由主义者）9. “金钱就是力量，我会尽我所能。”（如贪婪、进取、无情）10. 活动家/积极分子（如女权主义、权利平等、工会权力）'>
                            <TextArea
                                placeholder='信奉的神祗，某些思想，某些理念'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                        <Form.Item name='重要之人' label='重要之人' help='1. 父母（如母亲、父亲、继母）2. 祖父母（如外祖母、祖父）3. 兄弟姐妹（如兄弟、异母或异父兄弟、继姐妹）4. 子女（儿子或女儿）5. 伴侣（如配偶、未婚夫、恋人）6. 教授你最高本职技能的人。确定技能并考虑那人是谁（如学校老师、收你当学徒的人、你的父亲）7. 儿时的朋友（如同学、邻居、想象出来的朋友）8. 一位名人。你将其视作偶像或英雄，而你们可能从未见过（如影星、政客、音乐家）9. 游戏中的调查员同伴。选择一个或随机指定。10. 游戏中的非玩家角色（NPC）。询问守秘人，让他为你选择一个。1. 你感激他们。他们是如何帮助你的？（如经济上的帮助、在困难时期保护你、帮你找到第一份工作）2. 他们教会了你一些东西。是什么？（如某项技能、如何去爱、如何做人）3. 他们赋予你生命的意义。是什么？（如你渴望成为他们那样的人、你追求和他们一起、你希望让他们快乐）4. 你亏欠他们，想要寻求谅解。你做了什么？（如你偷了他们的钱、你向警察告发了他们、在他们最绝望时你拒绝提供帮助）5. 你们有着共同的经历。是什么？（如你们一起度过了艰难岁月、一同长大、一起在战争中服役）6. 你希望向他们证明自己。怎么做？（如得到一份好工作、找到自己的好伴侣、接受更好的教育）7. 你崇拜他们（如他们的名声、美貌、工作）8. 你感到后悔（如你本应死在他们的位置上、你出于某种原因而与他们闹翻、你本有机会帮助他们）9. 你想证明自己比他们更好。他们的缺点是什么？（如懒惰、酗酒、缺乏爱心）10. 他们曾迫害过你，你想要报复。你因何责怪他们？（如爱人的死亡、破产、婚姻破裂）'>
                            <TextArea
                                placeholder='家人，爱人，朋友，或是敌人'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                        <Form.Item name='意义非凡之地' label='意义非凡之地' help='1. 你学习的地方（如学校、大学）2. 你的故乡（如农村、集镇、繁华的大城市）3. 你邂逅初恋的地方（如音乐会、度假地、防空洞）4. 供你静思的地方（如图书馆、属于你的乡间步道、钓场）5. 社交场所（ 如上流俱乐部、当地酒吧、叔叔家的宅子）6. 和你的思想与信念有关的地方（如城区教堂、麦加、巨石阵）7. 重要之人的坟墓。那是谁？（如父母、子女、恋人）8. 你的家（如乡间庄园、出租公寓、收养你长大的孤儿院）9. 你一生中最幸福的时候所在的地方（如初吻时的公园长椅、你的大学）10. 你的工作场所（如办公室、图书馆、银行）'>
                            <TextArea
                                placeholder='人生的转折点，还是与重要之人的约定之地'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                        <Form.Item name='宝贵之物' label='宝贵之物' help='1. 与你最高的技能有关的物品（如昂贵的西装、假身份证明、铜指虎）2. 职业的必备物品（如医疗箱、汽车、开锁工具）3. 儿时的纪念品（如漫画、小折叠刀、幸运币）4. 逝者的遗物（如珠宝、钱包里的照片、信件）5. 重要之人送你的东西（如戒指、日记、地图）6. 你的收藏品。它是什么？（如车票、毛绒玩具、唱片）7. 你找到的一些东西，但你并不知道它是什么。你试图寻找答案（如：在橱子里发现的以未知语言写成的信，在父亲的遗物中找到的来路不明的古怪烟斗，在你的花园里挖到的古怪银球）8. 一件体育用品（如板球拍、签名球棒、钓竿）9. 一件武器（如配发的左轮手枪、你的旧猎枪、藏在靴子里的刀）10. 一只宠物（如狗、猫、龟）'>
                            <TextArea
                                placeholder='听说你有一个带翼猎犬护身符？'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                        <Form.Item name='特质' label='特质' help='1. 慷慨大方（如付小费时毫不吝啬、常向需要帮助的人伸出援手、乐善好施）2. 动物之友（如爱猫、在农场长大、爱马）3. 梦想家（如热爱幻想、富有远见、充满创造力）4. 享乐主义（如派对至上、嗜酒如命、“人生苦短，及时行乐”）5. 赌徒、敢于冒险（如扑克脸、勇于尝试、过着惊险的日子）6. 料理能手（如烤得一手好蛋糕、能为无米之炊、味觉盛宴）7. 万人迷（如温文尔雅、嗓音动听、迷人双眸）8. 义薄云天（如朋友的坚实后盾、一诺千金、愿为信念赴死）9. 名声在外（如国内最健谈的餐后演讲者、虔诚信徒、无所畏惧）10. 野心勃勃（如实现某一目的、成为老板、拥有一切）'>
                            <TextArea
                                placeholder='是阴险狡诈的小人，还是热爱冒险的英雄'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                        <Form.Item name='精神状况' label='精神状况' help='精神状况'>
                            <TextArea
                                placeholder='如有精神异常，请出具医生开的诊断证明'
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
                        form={form_bj}
                    >
                        <Form.Header>武器</Form.Header>
                        <Form.Item label='武器' help='随身携带的武器，请综合考虑年代背景和职业是否有合理理由携带此武器。可以重命名一下武器名字，名字中间没有空格的话可以直接.r名称进行骰伤害。' layout="vertical">
                            <div className={styles.weaponCon}>
                                {
                                    weaponUse.map((item, index) => (
                                        <div className={styles.weaponOne} key={index}>
                                            <div className={styles.weaponDel}><Button size='mini' color='danger' onClick={() => { delWeaponUse(index) }}>删除</Button> </div>
                                            {/* <div className={styles.weaponName}>{item["名称"]}</div> */}
                                            <Input className={styles.weaponName} onChange={(value) => setWeaponName(value, index)} defaultValue={weaponUse[index]["名称"]}></Input>
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
                        <Form.Item name='item' label='物品与装备' help='随身携带的物品，请考虑该物品是否会随身携带'>
                            <TextArea
                                placeholder='随身携带的物品，普通人不会随身携带C4哦~'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                        <Form.Header>经济状况</Form.Header>
                        <Form.Item name="CR" label="生活水平" help="角色的生活水平，由信用等级决定，若KP无特别说明，无需改动">
                            <Input />
                        </Form.Item>
                        <Form.Item name="现金" label="现金" help="角色持有的现金，由信用等级决定，若KP无特别说明，无需改动">
                            <Input />
                        </Form.Item>
                        <Form.Item name="资产" label="资产" help="角色的资产状况，由信用等级决定，若KP无特别说明，无需改动">
                            <Input />
                        </Form.Item>
                        <Form.Item name="消费水平" label="消费水平" help="每日消费水准，由信用等级决定，若KP无特别说明，无需改动">
                            <Input />
                        </Form.Item>
                        <Form.Header>克苏鲁神话</Form.Header>
                        <Form.Item name='魔法物品与典籍' label='魔法物品与典籍' help='拥有的魔法物品与典籍，一般人没有'>
                            <TextArea
                                placeholder='拥有的魔法物品与典籍'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                        <Form.Item name='法术' label='法术' help='掌握的法术，正常人一般不会学到法术'>
                            <TextArea
                                placeholder='学到过的法术'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                        <Form.Item name='第三类接触' label='第三类接触' help='第三类接触，一般人不会接触'>
                            <TextArea
                                placeholder='有哪些非自然、不同寻常的接触'
                                maxLength={100}
                                rows={3}
                                showCount
                            />
                        </Form.Item>
                    </Form>

                    <Button block color='success' size='large' onClick={commitFun}>创建角色卡</Button>
                </Tabs.Tab>

            </Tabs>

        </>
    )

}
