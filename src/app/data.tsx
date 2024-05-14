export const enum AttEnum {
    力量 = "力量",
    敏捷 = "敏捷",
    体质 = "体质",
    外貌 = "外貌",
    意志 = "意志",
    体型 = "体型",
    教育 = "教育",
    智力 = "智力",
    幸运 = "幸运"
}
export const work_options = [
    {
        label: '文艺工作',
        value: '文艺工作',
        children: [
            { label: '作家(原作向)', value: '作家(原作向)' },
            { label: '编辑', value: '编辑' },
            { label: '设计师', value: '设计师' },
            { label: '音乐家', value: '音乐家' },
            { label: '电影演员', value: '电影演员' },
            { label: '戏剧演员', value: '戏剧演员' },
            { label: '替身演员', value: '替身演员' },
            { label: '杂技演员', value: '杂技演员' },
            { label: '摄影师', value: '摄影师' },
            { label: '摄影记者', value: '摄影记者' },
            { label: '艺人', value: '艺人' },
            { label: '业余艺术爱好者(原作向)', value: '业余艺术爱好者(原作向)' },
        ],
    },
    {
        label: '工农商',
        value: '工农商',
        children: [
            { label: '工程师', value: '工程师' },
            { label: '建筑师', value: '建筑师' },
            { label: '伐木工', value: '伐木工' },
            { label: '工匠', value: '工匠' },
            { label: '技工', value: '技工' },
            { label: '矿工', value: '矿工' },
            { label: '农民', value: '农民' },
            { label: '渔民', value: '渔民' },
            { label: '猎人', value: '猎人' },
            { label: '牛仔', value: '牛仔' },
            { label: '书商', value: '书商' },
            { label: '古董商', value: '古董商' },
            { label: '店老板', value: '店老板' },
        ],
    },
    {
        label: '职工',
        value: '职工',
        children: [
            { label: "会计师", value: "会计师" },
            { label: "中介调查员", value: "中介调查员" },
            { label: "职员/主管", value: "职员/主管" },
            { label: "中高层管理人员", value: "中高层管理人员" },
            { label: "秘书", value: "秘书" },
            { label: "推销员", value: "推销员" },
            { label: "图书馆管理员(原作向)", value: "图书馆管理员(原作向)" },
            { label: "博物馆管理员", value: "博物馆管理员" },
            { label: "律师", value: "律师" },
            { label: "程序员", value: "程序员" },
            { label: "司机", value: "司机" },
            { label: "私人司机", value: "私人司机" },
            { label: "出租车司机", value: "出租车司机" },
        ],
    },
    {
        label: '学者',
        value: '学者',
        children: [
            { label: "文物学家(原作向)", value: "文物学家(原作向)" },
            { label: "考古学家(原作向)", value: "考古学家(原作向)" },
            { label: "教授(原作向)", value: "教授(原作向)" },
            { label: "科学家", value: "科学家" },
            { label: "研究员", value: "研究员" },
            { label: "实验室助理", value: "实验室助理" },
            { label: "学生/实习生", value: "学生/实习生" },
            { label: "艺术家", value: "艺术家" },
        ],
    },
    {
        label: '医疗系统',
        value: '医疗系统',
        children: [
            { label: "医生(原作向)", value: "医生(原作向)" },
            { label: "护士", value: "护士" },
            { label: "法医", value: "法医" },
            { label: "心理学家", value: "心理学家" },
            { label: "精神病学家", value: "精神病学家" },
            { label: "精神病医生(古典)", value: "精神病医生(古典)" },
            { label: "精神病院护工", value: "精神病院护工" },
            { label: "药剂师", value: "药剂师" },
        ],
    },
    {
        label: '运动/探险',
        value: '运动/探险',
        children: [
            { label: "运动员", value: "运动员" },
            { label: "拳击手、摔跤手", value: "拳击手、摔跤手" },
            { label: "潜水员", value: "潜水员" },
            { label: "调查记者(原作向)", value: "调查记者(原作向)" },
            { label: "通讯记者(原作向)", value: "通讯记者(原作向)" },
            { label: "驻外记者", value: "驻外记者" },
            { label: "登山家", value: "登山家" },
            { label: "旅行家", value: "旅行家" },
            { label: "探险家(古典)", value: "探险家(古典)" },
            { label: "飞行员", value: "飞行员" },
            { label: "特技飞行员(古典)", value: "特技飞行员(古典)" },
        ],
    },
    {
        label: '服务业',
        value: '服务业',
        children: [
            { label: "酒保", value: "酒保" },
            { label: "服务生", value: "服务生" },
            { label: "管家、佣人", value: "管家、佣人" },
            { label: "勤杂护工", value: "勤杂护工" },
            { label: "殡葬师", value: "殡葬师" },
            { label: "饲养员", value: "饲养员" },
            { label: "动物训练师", value: "动物训练师" },
        ],
    },
    {
        label: '宗教相关',
        value: '宗教相关',
        children: [
            { label: "神秘学家", value: "神秘学家" },
            { label: "神职人员", value: "神职人员" },
            { label: "教团首领", value: "教团首领" },
            { label: "传教士", value: "传教士" },
            { label: "除魅师(现代)", value: "除魅师(现代)" },
            { label: "狂热者", value: "狂热者" },
            { label: "部落成员", value: "部落成员" },
        ],
    },
    {
        label: '灰色/无职',
        value: '灰色/无职',
        children: [
            { label: "私家侦探", value: "私家侦探" },
            { label: "黑客", value: "黑客" },
            { label: "黑帮老大", value: "黑帮老大" },
            { label: "黑帮马仔", value: "黑帮马仔" },
            { label: "性工作者", value: "性工作者" },
            { label: "赏金猎人", value: "赏金猎人" },
            { label: "赌徒", value: "赌徒" },
            { label: "游民", value: "游民" },
            { label: "流浪者", value: "流浪者" },
            { label: "淘金客", value: "淘金客" },
            { label: "绅士/淑女", value: "绅士/淑女" },
        ],
    },
    {
        label: '罪犯',
        value: '罪犯',
        children: [
            { label: "刺客", value: "刺客" },
            { label: "银行劫匪", value: "银行劫匪" },
            { label: "打手、暴徒", value: "打手、暴徒" },
            { label: "窃贼", value: "窃贼" },
            { label: "欺诈师", value: "欺诈师" },
            { label: "独行罪犯", value: "独行罪犯" },
            { label: "女飞贼(古典)", value: "女飞贼(古典)" },
            { label: "赃物贩子", value: "赃物贩子" },
            { label: "赝造者", value: "赝造者" },
            { label: "走私者", value: "走私者" },
            { label: "混混", value: "混混" },
        ],
    },
    {
        label: '军警政',
        value: '军警政',
        children: [
            { label: "军官", value: "军官" },
            { label: "海军", value: "海军" },
            { label: "间谍", value: "间谍" },
            { label: "士兵", value: "士兵" },
            { label: "警探(原作向)", value: "警探(原作向)" },
            { label: "巡警(原作向)", value: "巡警(原作向)" },
            { label: "消防员", value: "消防员" },
            { label: "法官", value: "法官" },
            { label: "司法人员", value: "司法人员" },
            { label: "政府官员", value: "政府官员" },
            { label: "工会活动家", value: "工会活动家" },
        ],
    },
]

export const skill_default: { [key: string]: any } = {
    "克苏鲁神话": { name: "克苏鲁神话", default: 0, levelup: false, sub: false },
    "信用评级": { name: "信用评级", default: 0, levelup: true, sub: false },
    "侦查": { name: "侦查", default: 25, levelup: true, sub: false },
    "聆听": { name: "聆听", default: 20, levelup: true, sub: false },
    "图书馆使用": { name: "图书馆使用", default: 20, levelup: true, sub: false },
    "计算机使用": { name: "计算机使用", default: 5, levelup: true, sub: false },
    "潜行": { name: "潜行", default: 20, levelup: true, sub: false },
    "追踪": { name: "追踪", default: 10, levelup: true, sub: false },
    "导航": { name: "导航", default: 10, levelup: true, sub: false },
    "话术": { name: "话术", default: 5, levelup: true, sub: false },
    "说服": { name: "说服", default: 10, levelup: true, sub: false },
    "取悦": { name: "取悦", default: 15, levelup: true, sub: false },
    "恐吓": { name: "恐吓", default: 15, levelup: true, sub: false },
    "心理学": { name: "心理学", default: 10, levelup: true, sub: false },
    "母语": { name: "母语", default: "EDU", levelup: true, sub: true, sub_name: ["汉语", "英语", "日语", "法语", "俄语", "德语", "韩语", "粤语", "拉丁语", "荷兰语", "挪威语", "丹麦语", "印度语", "西班牙语", "葡萄牙语", "阿拉伯语"] },
    "外语": { name: "外语", default: 1, levelup: true, sub: true, sub_name: ["汉语", "英语", "日语", "法语", "俄语", "德语", "韩语", "粤语", "拉丁语", "荷兰语", "挪威语", "丹麦语", "印度语", "西班牙语", "葡萄牙语", "阿拉伯语"] },
    "闪避": { name: "闪避", default: "DEX/2", levelup: true, sub: false },
    "格斗:斗殴": { name: "格斗:斗殴", default: 25, levelup: true, sub: false },
    "格斗": { name: "格斗", default: 0, levelup: true, sub: true, sub_name: ["刀剑", "矛", "斧", "绞索", "链锯", "链枷", "鞭"] },
    "射击:手枪": { name: "射击:手枪", default: 20, levelup: true, sub: false },
    "射击:步/霰": { name: "射击:步/霰", default: 25, levelup: true, sub: false },
    "射击": { name: "射击", default: 0, levelup: true, sub: true, sub_name: ["冲锋枪", "弓弩", "机枪", "重武器"] },
    "投掷": { name: "投掷", default: 20, levelup: true, sub: false },
    "急救": { name: "急救", default: 30, levelup: true, sub: false },
    "医学": { name: "医学", default: 1, levelup: true, sub: false },
    "精神分析": { name: "精神分析", default: 1, levelup: true, sub: false },
    "攀爬": { name: "攀爬", default: 20, levelup: true, sub: false },
    "跳跃": { name: "跳跃", default: 20, levelup: true, sub: false },
    "游泳": { name: "游泳", default: 20, levelup: true, sub: false },
    "博物学": { name: "博物学", default: 10, levelup: true, sub: false },
    "神秘学": { name: "神秘学", default: 5, levelup: true, sub: false },
    "考古学": { name: "考古学", default: 1, levelup: true, sub: false },
    "人类学": { name: "人类学", default: 1, levelup: true, sub: false },
    "估价": { name: "估价", default: 5, levelup: true, sub: false },
    "会计": { name: "会计", default: 5, levelup: true, sub: false },
    "法律": { name: "法律", default: 5, levelup: true, sub: false },
    "历史": { name: "历史", default: 5, levelup: true, sub: false },
    "电子学": { name: "电子学", default: 1, levelup: true, sub: false },
    "科学": { name: "科学", default: 1, levelup: true, sub: true, sub_name: ["数学", "物理", "化学", "药学", "地质学", "生物学", "动物学", "植物学", "天文学", "密码学", "气象学", "工程学", "鉴证", "制药"] },
    "汽车驾驶": { name: "汽车驾驶", default: 20, levelup: true, sub: false },
    "骑术": { name: "骑术", default: 5, levelup: true, sub: false },
    "驾驶": { name: "驾驶", default: 1, levelup: true, sub: true, sub_name: ["船", "马车", "飞行器"] },
    "操作重型机械": { name: "操作重型机械", default: 1, levelup: true, sub: false },
    "乔装": { name: "乔装", default: 5, levelup: true, sub: false },
    "妙手": { name: "妙手", default: 10, levelup: true, sub: false },
    "锁匠": { name: "锁匠", default: 1, levelup: true, sub: false },
    "机械维修": { name: "机械维修", default: 10, levelup: true, sub: false },
    "电气维修": { name: "电气维修", default: 10, levelup: true, sub: false },
    "驯兽": { name: "驯兽", default: 5, levelup: true, sub: false },
    "技艺": { name: "技艺", default: 5, levelup: true, sub: true, sub_name: ["表演", "音乐", "绘画", "艺术", "摄影", "写作", "书法", "打字", "速记", "伪造", "烹饪", "裁缝", "理发", "技术制图", "耕作", "木工", "铁匠", "焊接", "管道工"] },
    "生存": { name: "生存", default: 5, levelup: true, sub: true, sub_name: ["沙漠", "森林", "荒岛", "高山", "海上"] },
    "其他": { name: "其他", default: 0, levelup: true, sub: false },
    // "灵能": { name: "灵能", default: 0, levelup: true, sub: true, sub_name: ["遥视", "占卜", "灵媒", "心灵感应", "念动"] },
    "遥视": { name: "遥视", default: 0, levelup: true, sub: false },
    "占卜": { name: "占卜", default: 0, levelup: true, sub: false },
    "灵媒": { name: "灵媒", default: 0, levelup: true, sub: false },
    "心灵感应": { name: "心灵感应", default: 0, levelup: true, sub: false },
    "念动": { name: "念动", default: 0, levelup: true, sub: false },
}

export const skill_option = [
    {
        name: "本职",
        sub: []
    },
    {
        name: "探索",
        sub: ["侦查", "聆听", "图书馆使用", "计算机使用", "追踪", "导航", "潜行"]
    },
    {
        name: "社交",
        sub: ["话术", "说服", "取悦", "恐吓", "心理学", "母语", "外语", "外语", "外语"]
    },
    {
        name: "战斗",
        sub: ["闪避", "格斗:斗殴", "格斗", "格斗", "射击:手枪", "射击:步/霰", "射击", "射击", "投掷"]
    },
    {
        name: "医学",
        sub: ["急救", "医学", "精神分析"]
    },
    {
        name: "运动",
        sub: ["攀爬", "跳跃", "游泳"]
    },
    {
        name: "知识",
        sub: ["博物学", "神秘学", "考古学", "人类学", "估价", "会计", "法律", "历史", "电子学", "科学", "科学", "科学"]
    },
    {
        name: "操纵",
        sub: ["汽车驾驶", "骑术", "驾驶", "驾驶", "操作重型机械"]
    },
    {
        name: "技艺",
        sub: ["乔装", "妙手", "锁匠", "机械维修", "电气维修", "驯兽", "技艺", "技艺", "技艺", "生存", "生存", "生存"]
    },
    {
        name: "其他",
        sub: ["信用评级", "克苏鲁神话"]
    },
]

export type ATT_Type = "力量" | "敏捷" | "体质" | "外貌" | "意志" | "体型" | "教育" | "智力" | "幸运";

export const work_default: { [key: string]: { name?: string, 信用评级: number[], workPoints: { scale: number, att: ATT_Type[] }[], describe: string, skill: ({ number: number, area: string, list?: any } | { name: string, sub_name?: string })[], } } = {
    "作家(原作向)": {
        "信用评级": [9, 30],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "二选一(博物学,神秘学)、技艺(文学)、历史、外语(任一)、母语(任一)、心理学、图书馆使用、其他个人或时代特长(任一)",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "博物学" }, { "name": "神秘学" }] },
            { "name": "技艺", "sub_name": "文学" },
            { "name": "历史" },
            { "name": "外语" },
            { "name": "母语" },
            { "name": "心理学" },
            { "name": "图书馆使用" },
            { "number": 1, "area": "all" },
            { "name": "信用评级" }
        ]
    },

    "编辑": {
        "信用评级": [10, 30],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "四选二(取悦,话术,恐吓,说服)、会计、历史、母语(任一)、心理学、侦查、其他个人或时代特长(任一)",
        "skill": [
            { "number": 2, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "会计" },
            { "name": "历史" },
            { "name": "母语" },
            { "name": "心理学" },
            { "name": "侦查" },
            { "number": 1, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "设计师": {
        "信用评级": [20, 60],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "二选一(计算机使用,图书馆使用)、会计、技艺(摄影)、技艺(任一)、机械维修、心理学、侦查、其他个人或时代特长(任一)",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "计算机使用" }, { "name": "图书馆使用" }] },
            { "name": "会计" },
            { "name": "技艺", "sub_name": "摄影" },
            { "name": "技艺" },
            { "name": "机械维修" },
            { "name": "心理学" },
            { "name": "侦查" },
            { "number": 1, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "音乐家": {
        "信用评级": [9, 30],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "意志"] }],
        "describe": "四选一(取悦,话术,恐吓,说服)、技艺(音乐)、聆听、心理学、其他个人或时代特长(任四)",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "技艺", "sub_name": "音乐" },
            { "name": "聆听" },
            { "name": "心理学" },
            { "number": 4, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "电影演员": {
        "信用评级": [20, 90],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }],
        "describe": "四选二(取悦,话术,恐吓,说服)、技艺(任一)、乔装、汽车驾驶、心理学、其他个人或时代特长(任二)",
        "skill": [
            { "number": 2, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "技艺" },
            { "name": "乔装" },
            { "name": "汽车驾驶" },
            { "name": "心理学" },
            { "number": 2, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "戏剧演员": {
        "信用评级": [9, 40],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }],
        "describe": "四选二(取悦,话术,恐吓,说服)、技艺(任一)、乔装、格斗(任一)、历史、心理学、其他个人或时代特长(任一)",
        "skill": [
            { "number": 2, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "技艺" },
            { "name": "乔装" },
            { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] },
            { "name": "历史" },
            { "name": "心理学" },
            { "number": 1, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "替身演员": {
        "信用评级": [10, 50],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["力量", "敏捷"] }],
        "describe": "二选一(电气维修,机械维修)、四选一(潜水,汽车驾驶,驾驶:任一,骑术)、攀爬、闪避、格斗(任一)、急救、跳跃、游泳",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "电气维修" }, { "name": "机械维修" }] },
            { "number": 1, "area": "list", "list": [{ "name": "潜水" }, { "name": "汽车驾驶" }, { "name": "驾驶" }, { "name": "骑术" }] },
            { "name": "攀爬" },
            { "name": "闪避" },
            { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] },
            { "name": "急救" },
            { "name": "跳跃" },
            { "name": "游泳" },
            { "name": "信用评级" }
        ]
    },
    "杂技演员": {
        "信用评级": [9, 20],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷"] }],
        "describe": "攀爬、闪避、投掷、跳跃、侦查、游泳、其他个人或时代特长(任二)",
        "skill": [
            { "name": "攀爬" },
            { "name": "闪避" },
            { "name": "投掷" },
            { "name": "跳跃" },
            { "name": "侦查" },
            { "name": "游泳" },
            { "number": 2, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "摄影师": {
        "信用评级": [9, 30],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "四选一(取悦,话术,恐吓,说服)、技艺(摄影)、心理学、科学(化学)、潜行、侦查、其他个人或时代特长(任二)",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "技艺", "sub_name": "摄影" },
            { "name": "心理学" },
            { "name": "科学", "sub_name": "化学" },
            { "name": "潜行" },
            { "name": "侦查" },
            { "number": 2, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "摄影记者": {
        "信用评级": [10, 40],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "四选一(取悦,话术,恐吓,说服)、技艺(摄影)、攀爬、外语(任一)、心理学、科学(化学)、其他个人或时代特长(任二)",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "技艺", "sub_name": "摄影" },
            { "name": "攀爬" },
            { "name": "外语" },
            { "name": "心理学" },
            { "name": "科学", "sub_name": "化学" },
            { "number": 2, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "艺人": {
        "信用评级": [9, 70],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }],
        "describe": "四选二(取悦,话术,恐吓,说服)、技艺(表演类，如表演、演唱、喜剧等)、乔装、聆听、心理学、其他个人或时代特长(任二)",
        "skill": [
            { "number": 2, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "技艺" },
            { "name": "乔装" },
            { "name": "聆听" },
            { "name": "心理学" },
            { "number": 2, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "业余艺术爱好者(原作向)": {
        "信用评级": [50, 99],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }],
        "describe": "四选一(取悦,话术,恐吓,说服)、技艺(任一)、射击(任一)、外语(任一)、骑术、其他个人或时代特长(任三)",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "技艺" },
            { "name": "射击" },
            { "name": "外语" },
            { "name": "骑术" },
            { "number": 3, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "工程师": {
        "信用评级": [30, 60],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "技艺(技术制图)、电气维修、图书馆使用、机械维修、操作重型机械、科学(工程学)、科学(物理)、其他个人或时代特长(任一)",
        "skill": [
            { "name": "技艺", "sub_name": "技术制图" },
            { "name": "电气维修" },
            { "name": "图书馆使用" },
            { "name": "机械维修" },
            { "name": "操作重型机械" },
            { "name": "科学", "sub_name": "工程学" },
            { "name": "科学", "sub_name": "物理" },
            { "number": 1, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "建筑师": {
        "信用评级": [30, 70],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "二选一(计算机使用,图书馆使用)、会计、技艺(任一)、法律、母语(任一)、说服、心理学、科学(数学)",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "计算机使用" }, { "name": "图书馆使用" }] },
            { "name": "会计" },
            { "name": "技艺" },
            { "name": "法律" },
            { "name": "母语" },
            { "name": "说服" },
            { "name": "心理学" },
            { "name": "科学", "sub_name": "数学" },
            { "name": "信用评级" }
        ]
    },
    "伐木工": {
        "信用评级": [9, 30],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["力量", "敏捷"] }],
        "describe": "三选一(博物学,科学:生物学,科学:植物学)、攀爬、闪避、格斗(链锯)、急救、跳跃、机械维修、投掷",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "博物学" }, { "name": "科学", "sub_name": "生物学" }, { "name": "科学", "sub_name": "植物学" }] },
            { "name": "攀爬" },
            { "name": "闪避" },
            { "name": "格斗", "sub_name": "链锯" },
            { "name": "急救" },
            { "name": "跳跃" },
            { "name": "机械维修" },
            { "name": "投掷" },
            { "name": "信用评级" }
        ]
    },
    "工匠": {
        "信用评级": [10, 40],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷"] }],
        "describe": "会计、技艺(任二)、机械维修、博物学、侦查、其他个人或时代特长(任二)",
        "skill": [
            { "name": "会计" },
            { "name": "技艺" },
            { "name": "技艺" },
            { "name": "机械维修" },
            { "name": "博物学" },
            { "name": "侦查" },
            { "number": 2, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "技工": {
        "信用评级": [9, 40],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "技艺(木工、焊接、管道工等)、攀爬、汽车驾驶、电气维修、机械维修、操作重型机械、其他个人或时代特长(任二)",
        "skill": [
            { "name": "技艺" },
            { "name": "攀爬" },
            { "name": "汽车驾驶" },
            { "name": "电气维修" },
            { "name": "机械维修" },
            { "name": "操作重型机械" },
            { "number": 2, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "矿工": {
        "信用评级": [9, 30],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }],
        "describe": "攀爬、科学(地质学)、跳跃、机械维修、操作重型机械、潜行、侦查、其他个人或时代特长(任一)",
        "skill": [
            { "name": "攀爬" },
            { "name": "科学", "sub_name": "地质学" },
            { "name": "跳跃" },
            { "name": "机械维修" },
            { "name": "操作重型机械" },
            { "name": "潜行" },
            { "name": "侦查" },
            { "number": 1, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "农民": {
        "信用评级": [9, 30],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }],
        "describe": "二选一(汽车驾驶,驾驶:马车)、四选一(取悦,话术,恐吓,说服)、技艺(耕作)、机械维修、博物学、操作重型机械、追踪、其他个人或时代特长(任一)",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "汽车驾驶" }, { "name": "驾驶", "sub_name": "马车" }] },
            { "number": 1, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "技艺", "sub_name": "耕作" },
            { "name": "机械维修" },
            { "name": "博物学" },
            { "name": "操作重型机械" },
            { "name": "追踪" },
            { "number": 1, "area": "all" },
            { "name": "信用评级" }
        ]
    },
    "渔民": {
        "信用评级": [20, 40],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "四选一(取悦,话术,恐吓,说服)、急救、机械维修、博物学、导航、驾驶(船)、侦查、游泳",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "急救" },
            { "name": "机械维修" },
            { "name": "博物学" },
            { "name": "导航" },
            { "name": "驾驶", "sub_name": "船" },
            { "name": "侦查" },
            { "name": "游泳" },
            { "name": "信用评级" }
        ]
    },
    "猎人": {
        "信用评级": [20, 50],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "二选一(聆听,侦查)、二选一(外语:任一,生存:任一)、射击(任一)、博物学、导航、科学(动物学)、潜行、追踪",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "聆听" }, { "name": "侦查" }] },
            { "number": 1, "area": "list", "list": [{ "name": "外语" }, { "name": "生存" }] },
            { "name": "射击" },
            { "name": "博物学" },
            { "name": "导航" },
            { "name": "科学", "sub_name": "动物学" },
            { "name": "潜行" },
            { "name": "追踪" },
            { "name": "信用评级" }
        ]
    },
    "牛仔": {
        "信用评级": [9, 20],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }],
        "describe": "二选一(格斗:任一,射击:任一)、二选一(急救,博物学)、闪避、跳跃、骑术、生存(任一)、投掷、追踪",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "格斗" }, { "name": "射击" }] },
            { "number": 1, "area": "list", "list": [{ "name": "急救" }, { "name": "博物学" }] },
            { "name": "闪避" },
            { "name": "跳跃" },
            { "name": "骑术" },
            { "name": "生存" },
            { "name": "投掷" },
            { "name": "追踪" },
            { "name": "信用评级" }
        ]
    },
    "书商": {
        "信用评级": [20, 40],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "四选一(取悦,话术,恐吓,说服)、会计、估价、汽车驾驶、历史、图书馆使用、母语(任一)、外语(任一)",
        "skill": [
            { "number": 1, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "会计" },
            { "name": "估价" },
            { "name": "汽车驾驶" },
            { "name": "历史" },
            { "name": "图书馆使用" },
            { "name": "母语" },
            { "name": "外语" },
            { "name": "信用评级" }
        ]
    },
    "古董商": {
        "信用评级": [30, 50],
        "workPoints": [{ "scale": 4, "att": ["教育"] }],
        "describe": "四选二(取悦,话术,恐吓,说服)、会计、估价、汽车驾驶、历史、图书馆使用、导航",
        "skill": [
            { "number": 2, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "会计" },
            { "name": "估价" },
            { "name": "汽车驾驶" },
            { "name": "历史" },
            { "name": "图书馆使用" },
            { "name": "导航" },
            { "name": "信用评级" }
        ]
    },
    "店老板": {
        "信用评级": [20, 40],
        "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }],
        "describe": "四选二(取悦,话术,恐吓,说服)、会计、电气维修、聆听、机械维修、心理学、侦查",
        "skill": [
            { "number": 2, "area": "list", "list": [{ "name": "取悦" }, { "name": "话术" }, { "name": "恐吓" }, { "name": "说服" }] },
            { "name": "会计" },
            { "name": "电气维修" },
            { "name": "聆听" },
            { "name": "机械维修" },
            { "name": "心理学" },
            { "name": "侦查" },
            { "name": "信用评级" }
        ]
    }, "会计师": { 'name': '会计师', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [30, 70], 'describe': '会计、法律、图书馆使用、聆听、说服、侦查、其他个人或时代特长(任二)', 'skill': [{ 'name': '会计' }, { 'name': '法律' }, { 'name': '图书馆使用' }, { 'name': '聆听' }, { 'name': '说服' }, { 'name': '侦查' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "中介调查员": { 'name': '中介调查员', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [20, 45], 'describe': '四选一(取悦,话术,恐吓,说服)、格斗:斗殴、射击(任一)、法律、图书馆使用、心理学、潜行、追踪', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '格斗:斗殴' }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '法律' }, { 'name': '图书馆使用' }, { 'name': '心理学' }, { 'name': '潜行' }, { 'name': '追踪' }, { 'name': '信用评级' }] },
    "职员/主管": { 'name': '职员/主管', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 20], 'describe': '二选一(母语,外语:任一)、二选一(图书馆使用,计算机使用Ω)、四选一(取悦,话术,恐吓,说服)、会计、法律、聆听、其他个人或时代特长(任二)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '母语' }, { 'name': '外语' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '图书馆使用' }, { 'name': '计算机使用Ω' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '法律' }, { 'name': '聆听' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "中高层管理人员": { 'name': '中高层管理人员', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [20, 80], 'describe': '四选二(取悦,话术,恐吓,说服)、会计、外语(任一)、法律、心理学、其他个人或时代特长(任二)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '外语' }, { 'name': '法律' }, { 'name': '心理学' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "秘书": { 'name': '秘书', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "外貌"] }], '信用评级': [9, 30], 'describe': '二选一(技艺:打字,技艺:速记)、四选二(取悦,话术,恐吓,说服)、二选一(计算机使用Ω,图书馆使用)、会计、母语(任一)、心理学、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '技艺', 'sub_name': '打字' }, { 'name': '技艺', 'sub_name': '速记' }] }, { 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '计算机使用Ω' }, { 'name': '图书馆使用' }] }, { 'name': '会计' }, { 'name': '母语' }, { 'name': '心理学' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "推销员": { 'name': '推销员', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [9, 40], 'describe': '四选二(取悦,话术,恐吓,说服)、二选一(潜行,妙手)、会计、汽车驾驶、聆听、心理学、其他个人或时代特长(任一)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '潜行' }, { 'name': '妙手' }] }, { 'name': '会计' }, { 'name': '汽车驾驶' }, { 'name': '聆听' }, { 'name': '心理学' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "图书馆管理员(原作向)": { 'name': '图书馆管理员(原作向)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 35], 'describe': '会计、图书馆使用、外语(任一)、母语(任一)、其他个人或时代特长(任四)', 'skill': [{ 'name': '会计' }, { 'name': '图书馆使用' }, { 'name': '外语' }, { 'name': '母语' }, { 'number': 4, 'area': 'all' }, { 'name': '信用评级' }] },
    "博物馆管理员": { 'name': '博物馆管理员', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [10, 30], 'describe': '会计、估价、考古学、历史、图书馆使用、神秘学、外语(任一)、侦查', 'skill': [{ 'name': '会计' }, { 'name': '估价' }, { 'name': '考古学' }, { 'name': '历史' }, { 'name': '图书馆使用' }, { 'name': '神秘学' }, { 'name': '外语' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "律师": { 'name': '律师', '信用评级': [30, 80], "workPoints": [{ "scale": 4, "att": ["教育"] }], 'describe': '四选二(取悦,话术,恐吓,说服)、会计、法律、图书馆使用、心理学、其他个人或时代特长(任二)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '法律' }, { 'name': '图书馆使用' }, { 'name': '心理学' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "程序员": { 'name': '程序员', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [10, 70], 'describe': '计算机使用Ω、电气维修、电子学Ω、图书馆使用、科学(任一)、侦查、其他个人或时代特长(任二)', 'skill': [{ 'name': '计算机使用Ω' }, { 'name': '电气维修' }, { 'name': '电子学Ω' }, { 'name': '图书馆使用' }, { 'name': '科学' }, { 'name': '侦查' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "司机": { 'name': '司机', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [9, 20], 'describe': '四选一(取悦,话术,恐吓,说服)、会计、汽车驾驶、聆听、机械维修、导航、心理学、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '汽车驾驶' }, { 'name': '聆听' }, { 'name': '机械维修' }, { 'name': '导航' }, { 'name': '心理学' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "私人司机": { 'name': '私人司机', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷"] }], '信用评级': [10, 40], 'describe': '四选二(取悦,话术,恐吓,说服)、汽车驾驶、聆听、机械维修、导航、侦查、其他个人或时代特长(任一)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '汽车驾驶' }, { 'name': '聆听' }, { 'name': '机械维修' }, { 'name': '导航' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "出租车司机": { 'name': '出租车司机', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷"] }], '信用评级': [9, 30], 'describe': '会计、汽车驾驶、电气维修、话术、机械维修、导航、侦查、其他个人或时代特长(任一)', 'skill': [{ 'name': '会计' }, { 'name': '汽车驾驶' }, { 'name': '电气维修' }, { 'name': '话术' }, { 'name': '机械维修' }, { 'name': '导航' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "文物学家(原作向)": { 'name': '文物学家(原作向)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [30, 70], 'describe': '四选一(取悦,话术,恐吓,说服)、估价、技艺(任一)、历史、图书馆使用、外语(任一)、侦查、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '估价' }, { 'name': '技艺' }, { 'name': '历史' }, { 'name': '图书馆使用' }, { 'name': '外语' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "考古学家(原作向)": { 'name': '考古学家(原作向)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [10, 40], 'describe': '二选一(导航,科学:任一)、估价、考古学、历史、外语(任一)、图书馆使用、侦查、机械维修', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '导航' }, { 'name': '科学' }] }, { 'name': '估价' }, { 'name': '考古学' }, { 'name': '历史' }, { 'name': '外语' }, { 'name': '图书馆使用' }, { 'name': '侦查' }, { 'name': '机械维修' }, { 'name': '信用评级' }] },
    "教授(原作向)": { 'name': '教授(原作向)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [20, 70], 'describe': '图书馆使用、外语(任一)、母语(任一)、心理学、其他个人或时代特长(任四)', 'skill': [{ 'name': '图书馆使用' }, { 'name': '外语' }, { 'name': '母语' }, { 'name': '心理学' }, { 'number': 4, 'area': 'all' }, { 'name': '信用评级' }] },
    "科学家": { 'name': '科学家', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 50], 'describe': '二选一(计算机使用Ω,图书馆使用)、四选一(取悦,话术,恐吓,说服)、科学(任三)、外语(任一)、母语(任一)、侦查', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '计算机使用Ω' }, { 'name': '图书馆使用' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '科学' }, { 'name': '科学' }, { 'name': '科学' }, { 'name': '外语' }, { 'name': '母语' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "研究员": { 'name': '研究员', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 30], 'describe': '四选一(取悦,话术,恐吓,说服)、历史、图书馆使用、外语(任一)、侦查、科学(任三)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '历史' }, { 'name': '图书馆使用' }, { 'name': '外语' }, { 'name': '侦查' }, { 'name': '科学' }, { 'name': '科学' }, { 'name': '科学' }, { 'name': '信用评级' }] },
    "实验室助理": { 'name': '实验室助理', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [10, 30], 'describe': '二选一(计算机使用Ω,图书馆使用)、电气维修、外语(任一)、科学(化学)、科学(任二)、侦查、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '计算机使用Ω' }, { 'name': '图书馆使用' }] }, { 'name': '电气维修' }, { 'name': '外语' }, { 'name': '科学', 'sub_name': '化学' }, { 'name': '科学' }, { 'name': '科学' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "学生/实习生": { 'name': '学生/实习生', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [5, 10], 'describe': '二选一(母语,外语:任一)、图书馆使用、聆听、其他个人或时代特长(任五)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '母语' }, { 'name': '外语' }] }, { 'name': '图书馆使用' }, { 'name': '聆听' }, { 'number': 5, 'area': 'all' }, { 'name': '信用评级' }] },
    "艺术家": { 'name': '艺术家', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "意志"] }], '信用评级': [9, 50], 'describe': '二选一(历史,博物学)、四选一(取悦,话术,恐吓,说服)、技艺(任一)、外语(任一)、心理学、侦查、其他个人或时代特长(任二)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '历史' }, { 'name': '博物学' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '技艺' }, { 'name': '外语' }, { 'name': '心理学' }, { 'name': '侦查' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "医生(原作向)": { 'name': '医生(原作向)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [30, 80], 'describe': '急救、医学、外语(拉丁语)、心理学、科学(生物学)、科学(制药)、其他个人或时代特长(任二)', 'skill': [{ 'name': '急救' }, { 'name': '医学' }, { 'name': '外语', 'sub_name': '拉丁语' }, { 'name': '心理学' }, { 'name': '科学', 'sub_name': '生物学' }, { 'name': '科学', 'sub_name': '制药' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "护士": { 'name': '护士', '信用评级': [9, 30], "workPoints": [{ "scale": 4, "att": ["教育"] }], 'describe': '四选一(取悦,话术,恐吓,说服)、急救、聆听、医学、心理学、科学(生物学)、科学(化学)、侦查', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '急救' }, { 'name': '聆听' }, { 'name': '医学' }, { 'name': '心理学' }, { 'name': '科学', 'sub_name': '生物学' }, { 'name': '科学', 'sub_name': '化学' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "法医": { 'name': '法医', '信用评级': [40, 60], "workPoints": [{ "scale": 4, "att": ["教育"] }], 'describe': '外语(任一)、图书馆使用、医学、说服、科学(生物学)、科学(鉴证)、科学(制药)、侦查', 'skill': [{ 'name': '外语' }, { 'name': '图书馆使用' }, { 'name': '医学' }, { 'name': '说服' }, { 'name': '科学', 'sub_name': '生物学' }, { 'name': '科学', 'sub_name': '鉴证' }, { 'name': '科学', 'sub_name': '制药' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "心理学家": { 'name': '心理学家', '信用评级': [10, 40], "workPoints": [{ "scale": 4, "att": ["教育"] }], 'describe': '会计、图书馆使用、聆听、说服、精神分析、心理学、其他个人或时代特长(任二)', 'skill': [{ 'name': '会计' }, { 'name': '图书馆使用' }, { 'name': '聆听' }, { 'name': '说服' }, { 'name': '精神分析' }, { 'name': '心理学' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "精神病学家": { 'name': '精神病学家', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [30, 80], 'describe': '外语(任一)、聆听、医学、说服、精神分析、心理学、科学(生物学)、科学(化学)', 'skill': [{ 'name': '外语' }, { 'name': '聆听' }, { 'name': '医学' }, { 'name': '说服' }, { 'name': '精神分析' }, { 'name': '心理学' }, { 'name': '科学', 'sub_name': '生物学' }, { 'name': '科学', 'sub_name': '化学' }, { 'name': '信用评级' }] },
    "精神病医生(古典)": { 'name': '精神病医生(古典)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [10, 60], 'describe': '法律、聆听、医学、外语(任一)、精神分析、心理学、科学(生物学)、科学(化学)', 'skill': [{ 'name': '法律' }, { 'name': '聆听' }, { 'name': '医学' }, { 'name': '外语' }, { 'name': '精神分析' }, { 'name': '心理学' }, { 'name': '科学', 'sub_name': '生物学' }, { 'name': '科学', 'sub_name': '化学' }, { 'name': '信用评级' }] },
    "精神病院护工": { 'name': '精神病院护工', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [8, 20], 'describe': '四选二(取悦,话术,恐吓,说服)、闪避、格斗:斗殴、急救、聆听、心理学、潜行', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '闪避' }, { 'name': '格斗:斗殴' }, { 'name': '急救' }, { 'name': '聆听' }, { 'name': '心理学' }, { 'name': '潜行' }, { 'name': '信用评级' }] },
    "药剂师": { 'name': '药剂师', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [35, 75], 'describe': '四选一(取悦,话术,恐吓,说服)、会计、急救、外语(拉丁语)、图书馆使用、心理学、科学(化学)、科学(制药)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '急救' }, { 'name': '外语', 'sub_name': '拉丁语' }, { 'name': '图书馆使用' }, { 'name': '心理学' }, { 'name': '科学', 'sub_name': '化学' }, { 'name': '科学', 'sub_name': '制药' }, { 'name': '信用评级' }] },
    "运动员": { 'name': '运动员', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [9, 70], 'describe': '四选一(取悦,话术,恐吓,说服)、攀爬、跳跃、格斗:斗殴、骑术、游泳、投掷、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '攀爬' }, { 'name': '跳跃' }, { 'name': '格斗:斗殴' }, { 'name': '骑术' }, { 'name': '游泳' }, { 'name': '投掷' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "拳击手、摔跤手": { 'name': '拳击手、摔跤手', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["力量"] }], '信用评级': [9, 60], 'describe': '闪避、格斗:斗殴、恐吓、跳跃、心理学、侦查、其他个人或时代特长(任二)', 'skill': [{ 'name': '闪避' }, { 'name': '格斗:斗殴' }, { 'name': '恐吓' }, { 'name': '跳跃' }, { 'name': '心理学' }, { 'name': '侦查' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "潜水员": { 'name': '潜水员', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷"] }], '信用评级': [9, 30], 'describe': '潜水、急救、机械维修、驾驶(船)、科学(生物学)、侦查、游泳、其他个人或时代特长(任一)', 'skill': [{ 'name': '潜水' }, { 'name': '急救' }, { 'name': '机械维修' }, { 'name': '驾驶', 'sub_name': '船' }, { 'name': '科学', 'sub_name': '生物学' }, { 'name': '侦查' }, { 'name': '游泳' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "调查记者(原作向)": { 'name': '调查记者(原作向)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 30], 'describe': '二选一(技艺:艺术,技艺:摄影)、四选一(取悦,话术,恐吓,说服)、历史、图书馆使用、母语(任一)、心理学、其他个人或时代特长(任二)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '技艺', 'sub_name': '艺术' }, { 'name': '技艺', 'sub_name': '摄影' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '历史' }, { 'name': '图书馆使用' }, { 'name': '母语' }, { 'name': '心理学' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "通讯记者(原作向)": { 'name': '通讯记者(原作向)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 30], 'describe': '四选一(取悦,话术,恐吓,说服)、技艺(表演)、历史、聆听、母语(任一)、心理学、潜行、侦查', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '技艺', 'sub_name': '表演' }, { 'name': '历史' }, { 'name': '聆听' }, { 'name': '母语' }, { 'name': '心理学' }, { 'name': '潜行' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "驻外记者": { 'name': '驻外记者', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [10, 40], 'describe': '四选二(取悦,话术,恐吓,说服)、历史、外语(任一)、母语(任一)、聆听、心理学、其他个人或时代特长(任一)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '历史' }, { 'name': '外语' }, { 'name': '母语' }, { 'name': '聆听' }, { 'name': '心理学' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "登山家": { 'name': '登山家', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [30, 60], 'describe': '攀爬、急救、跳跃、聆听、导航、外语(任一)、生存(高山/冰山)、追踪', 'skill': [{ 'name': '攀爬' }, { 'name': '急救' }, { 'name': '跳跃' }, { 'name': '聆听' }, { 'name': '导航' }, { 'name': '外语' }, { 'name': '生存', 'sub_name': '高山/冰山' }, { 'name': '追踪' }, { 'name': '信用评级' }] },
    "旅行家": { 'name': '旅行家', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [5, 20], 'describe': '射击(任一)、急救、聆听、博物学、导航、侦查、生存(任一)、追踪', 'skill': [{ "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '急救' }, { 'name': '聆听' }, { 'name': '博物学' }, { 'name': '导航' }, { 'name': '侦查' }, { 'name': '生存' }, { 'name': '追踪' }, { 'name': '信用评级' }] },
    "探险家(古典)": { 'name': '探险家(古典)', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量", "外貌"] }], '信用评级': [55, 80], 'describe': '二选一(攀爬,游泳)、射击(任一)、历史、跳跃、博物学、导航、外语(任一)、生存(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '攀爬' }, { 'name': '游泳' }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '历史' }, { 'name': '跳跃' }, { 'name': '博物学' }, { 'name': '导航' }, { 'name': '外语' }, { 'name': '生存' }, { 'name': '信用评级' }] },
    "飞行员": { 'name': '飞行员', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷"] }], '信用评级': [20, 70], 'describe': '电气维修、机械维修、导航、操作重型机械、驾驶(飞行器)、科学(天文学)、其他个人或时代特长(任二)', 'skill': [{ 'name': '电气维修' }, { 'name': '机械维修' }, { 'name': '导航' }, { 'name': '操作重型机械' }, { 'name': '驾驶', 'sub_name': '飞行器' }, { 'name': '科学', 'sub_name': '天文学' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "特技飞行员(古典)": { 'name': '特技飞行员(古典)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [30, 60], 'describe': '会计、电气维修、聆听、机械维修、导航、驾驶(飞行器)、侦查、其他个人或时代特长(任一)', 'skill': [{ 'name': '会计' }, { 'name': '电气维修' }, { 'name': '聆听' }, { 'name': '机械维修' }, { 'name': '导航' }, { 'name': '驾驶', 'sub_name': '飞行器' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "酒保": { 'name': '酒保', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [8, 25], 'describe': '四选二(取悦,话术,恐吓,说服)、会计、格斗:斗殴、聆听、心理学、侦查、其他个人或时代特长(任一)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '格斗:斗殴' }, { 'name': '聆听' }, { 'name': '心理学' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "服务生": { 'name': '服务生', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "外貌"] }], '信用评级': [9, 20], 'describe': '四选二(取悦,话术,恐吓,说服)、会计、技艺(任一)、闪避、聆听、心理学、其他个人或时代特长(任一)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '技艺' }, { 'name': '闪避' }, { 'name': '聆听' }, { 'name': '心理学' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "管家、佣人": { 'name': '管家、佣人', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 40], 'describe': '二选一(会计,估价)、技艺(生活类，如烹饪、裁缝、理发)、急救、聆听、外语(任一)、心理学、侦查、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '会计' }, { 'name': '估价' }] }, { 'name': '技艺(生活类，如烹饪' }, { 'name': '裁缝' }, { 'name': '理发)' }, { 'name': '急救' }, { 'name': '聆听' }, { 'name': '外语' }, { 'name': '心理学' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "勤杂护工": { 'name': '勤杂护工', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["力量"] }], '信用评级': [6, 15], 'describe': '四选一(取悦,话术,恐吓,说服)、电气维修、格斗:斗殴、急救、聆听、机械维修、心理学、潜行', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '电气维修' }, { 'name': '格斗:斗殴' }, { 'name': '急救' }, { 'name': '聆听' }, { 'name': '机械维修' }, { 'name': '心理学' }, { 'name': '潜行' }, { 'name': '信用评级' }] },
    "殡葬师": { 'name': '殡葬师', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [20, 40], 'describe': '四选一(取悦,话术,恐吓,说服)、会计、汽车驾驶、历史、神秘学、心理学、科学(生物学)、科学(化学)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '汽车驾驶' }, { 'name': '历史' }, { 'name': '神秘学' }, { 'name': '心理学' }, { 'name': '科学', 'sub_name': '生物学' }, { 'name': '科学', 'sub_name': '化学' }, { 'name': '信用评级' }] },
    "饲养员": { 'name': '饲养员', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 40], 'describe': '驯兽、会计、闪避、急救、博物学、医学、科学(制药)、科学(动物学)', 'skill': [{ 'name': '驯兽' }, { 'name': '会计' }, { 'name': '闪避' }, { 'name': '急救' }, { 'name': '博物学' }, { 'name': '医学' }, { 'name': '科学', 'sub_name': '制药' }, { 'name': '科学', 'sub_name': '动物学' }, { 'name': '信用评级' }] },
    "动物训练师": { 'name': '动物训练师', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌", "意志"] }], '信用评级': [10, 40], 'describe': '跳跃、聆听、博物学、心理学、科学(动物学)、潜行、追踪、其他个人或时代特长(任一)', 'skill': [{ 'name': '跳跃' }, { 'name': '聆听' }, { 'name': '博物学' }, { 'name': '心理学' }, { 'name': '科学', 'sub_name': '动物学' }, { 'name': '潜行' }, { 'name': '追踪' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "神秘学家": { 'name': '神秘学家', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 65], 'describe': '四选一(取悦,话术,恐吓,说服)、人类学、历史、图书馆使用、神秘学、外语(任一)、科学(天文学)、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '人类学' }, { 'name': '历史' }, { 'name': '图书馆使用' }, { 'name': '神秘学' }, { 'name': '外语' }, { 'name': '科学', 'sub_name': '天文学' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "神职人员": { 'name': '神职人员', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 60], 'describe': '四选一(取悦,话术,恐吓,说服)、会计、历史、图书馆使用、聆听、外语(任一)、心理学、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '历史' }, { 'name': '图书馆使用' }, { 'name': '聆听' }, { 'name': '外语' }, { 'name': '心理学' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "教团首领": { 'name': '教团首领', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [30, 60], 'describe': '四选二(取悦,话术,恐吓,说服)、会计、神秘学、心理学、侦查、其他个人或时代特长(任二)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '神秘学' }, { 'name': '心理学' }, { 'name': '侦查' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "传教士": { 'name': '传教士', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [0, 30], 'describe': '四选一(取悦,话术,恐吓,说服)、技艺(任一)、急救、机械维修、医学、博物学、其他个人或时代特长(任二)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '技艺' }, { 'name': '急救' }, { 'name': '机械维修' }, { 'name': '医学' }, { 'name': '博物学' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "除魅师(现代)": { 'name': '除魅师(现代)', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [20, 50], 'describe': '四选二(取悦,话术,恐吓,说服)、二选一(格斗:斗殴,射击:任一)、汽车驾驶、历史、神秘学、心理学、潜行', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '格斗', 'sub_name': '斗殴' }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] },] }, { 'name': '汽车驾驶' }, { 'name': '历史' }, { 'name': '神秘学' }, { 'name': '心理学' }, { 'name': '潜行' }, { 'name': '信用评级' }] },
    "狂热者": { 'name': '狂热者', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌", "意志"] }], '信用评级': [0, 30], 'describe': '四选二(取悦,话术,恐吓,说服)、历史、心理学、潜行、其他个人或时代特长(任三)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '历史' }, { 'name': '心理学' }, { 'name': '潜行' }, { 'number': 3, 'area': 'all' }, { 'name': '信用评级' }] },
    "部落成员": {
        'name': '部落成员', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [0, 15], 'describe': '二选一(格斗:任一,投掷)、攀爬、聆听、博物学、神秘学、侦查、游泳、生存(任一)', 'skill': [
            { 'number': 1, 'area': 'list', 'list': [{ "name": "格斗:斗殴" }, { "name": "格斗" }, { 'name': '投掷' }] },
            { 'name': '攀爬' }, { 'name': '聆听' }, { 'name': '博物学' }, { 'name': '神秘学' }, { 'name': '侦查' }, { 'name': '游泳' }, { 'name': '生存' }, { 'name': '信用评级' }]
    },
    "私家侦探": {
        'name': '私家侦探', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [9, 30], 'describe': '四选一(取悦,话术,恐吓,说服)、四选一(格斗:任一,射击:任一,锁匠,计算机使用Ω)、技艺(摄影)、乔装、法律、图书馆使用、心理学、侦查', 'skill': [
            { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] },
            { 'number': 1, 'area': 'list', 'list': [{ "name": "格斗:斗殴" }, { "name": "格斗" }, { "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }, { 'name': '锁匠' }, { 'name': '计算机使用Ω' }] },
            { 'name': '技艺', 'sub_name': '摄影' },
            { 'name': '乔装' },
            { 'name': '法律' },
            { 'name': '图书馆使用' },
            { 'name': '心理学' },
            { 'name': '侦查' },
            { 'name': '信用评级' }]
    },
    "黑客": { 'name': '黑客', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [10, 70], 'describe': '四选一(取悦,话术,恐吓,说服)、计算机使用Ω、电气维修、电子学Ω、图书馆使用、侦查、其他个人或时代特长(任二)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '计算机使用Ω' }, { 'name': '电气维修' }, { 'name': '电子学Ω' }, { 'name': '图书馆使用' }, { 'name': '侦查' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "黑帮老大": { 'name': '黑帮老大', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [60, 95], 'describe': '四选二(取悦,话术,恐吓,说服)、格斗(任一)、射击(任一)、法律、聆听、心理学、侦查', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '法律' }, { 'name': '聆听' }, { 'name': '心理学' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "黑帮马仔": { 'name': '黑帮马仔', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [9, 20], 'describe': '四选二(取悦,话术,恐吓,说服)、汽车驾驶、格斗(任一)、射击(任一)、心理学、其他个人或时代特长(任二)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '汽车驾驶' }, { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '心理学' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "性工作者": { 'name': '性工作者', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [5, 50], 'describe': '四选二(取悦,话术,恐吓,说服)、技艺(任一)、闪避、心理学、妙手、潜行、其他个人或时代特长(任一)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '技艺' }, { 'name': '闪避' }, { 'name': '心理学' }, { 'name': '妙手' }, { 'name': '潜行' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "赏金猎人": {
        'name': '赏金猎人', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [9, 30], 'describe': '二选一(电气维修,电子学Ω)、二选一(格斗:任一,射击:任一)、四选一(取悦,话术,恐吓,说服)、汽车驾驶、法律、心理学、追踪、潜行', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '电气维修' }, { 'name': '电子学Ω' }] },
        { 'number': 1, 'area': 'list', 'list': [{ "name": "格斗:斗殴" }, { "name": "格斗" }, { "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] },
        { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '汽车驾驶' }, { 'name': '法律' }, { 'name': '心理学' }, { 'name': '追踪' }, { 'name': '潜行' }, { 'name': '信用评级' }]
    },
    "赌徒": { 'name': '赌徒', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "外貌"] }], '信用评级': [8, 50], 'describe': '四选二(取悦,话术,恐吓,说服)、会计、技艺(表演)、聆听、心理学、妙手、侦查', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '技艺', 'sub_name': '表演' }, { 'name': '聆听' }, { 'name': '心理学' }, { 'name': '妙手' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "游民": { 'name': '游民', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "外貌"] }], '信用评级': [0, 5], 'describe': '二选一(锁匠,妙手)、技艺(任一)、攀爬、跳跃、聆听、导航、潜行、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '锁匠' }, { 'name': '妙手' }] }, { 'name': '技艺' }, { 'name': '攀爬' }, { 'name': '跳跃' }, { 'name': '聆听' }, { 'name': '导航' }, { 'name': '潜行' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "流浪者": { 'name': '流浪者', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量", "外貌"] }], '信用评级': [0, 5], 'describe': '四选一(取悦,话术,恐吓,说服)、攀爬、跳跃、聆听、导航、潜行、其他个人或时代特长(任二)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '攀爬' }, { 'name': '跳跃' }, { 'name': '聆听' }, { 'name': '导航' }, { 'name': '潜行' }, { 'number': 2, 'area': 'all' }, { 'name': '信用评级' }] },
    "淘金客": { 'name': '淘金客', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [0, 10], 'describe': '攀爬、急救、历史、机械维修、导航、科学(地质学)、侦查、其他个人或时代特长(任一)', 'skill': [{ 'name': '攀爬' }, { 'name': '急救' }, { 'name': '历史' }, { 'name': '机械维修' }, { 'name': '导航' }, { 'name': '科学', 'sub_name': '地质学' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "绅士/淑女": { 'name': '绅士/淑女', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [40, 90], 'describe': '四选二(取悦,话术,恐吓,说服)、技艺(任一)、射击(步/霰)、历史、外语(任一)、导航、骑术', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '技艺' }, { 'name': '射击', 'sub_name': '步/霰' }, { 'name': '历史' }, { 'name': '外语' }, { 'name': '导航' }, { 'name': '骑术' }, { 'name': '信用评级' }] },
    "刺客": { 'name': '刺客', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [30, 60], 'describe': '乔装、电气维修、格斗(任一)、射击(任一)、锁匠、机械维修、潜行、心理学', 'skill': [{ 'name': '乔装' }, { 'name': '电气维修' }, { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '锁匠' }, { 'name': '机械维修' }, { 'name': '潜行' }, { 'name': '心理学' }, { 'name': '信用评级' }] },
    "银行劫匪": { 'name': '银行劫匪', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [5, 75], 'describe': '二选一(电气维修,机械维修)、汽车驾驶、格斗(任一)、射击(任一)、恐吓、锁匠、操作重型机械、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '电气维修' }, { 'name': '机械维修' }] }, { 'name': '汽车驾驶' }, { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '恐吓' }, { 'name': '锁匠' }, { 'name': '操作重型机械' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "打手、暴徒": { 'name': '打手、暴徒', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["力量"] }], '信用评级': [5, 30], 'describe': '四选二(取悦,话术,恐吓,说服)、汽车驾驶、格斗(任一)、射击(任一)、心理学、潜行、侦查', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '汽车驾驶' }, { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '心理学' }, { 'name': '潜行' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "窃贼": { 'name': '窃贼', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷"] }], '信用评级': [5, 40], 'describe': '二选一(电气维修,机械维修)、估价、攀爬、聆听、锁匠、妙手、潜行、侦查', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '电气维修' }, { 'name': '机械维修' }] }, { 'name': '估价' }, { 'name': '攀爬' }, { 'name': '聆听' }, { 'name': '锁匠' }, { 'name': '妙手' }, { 'name': '潜行' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "欺诈师": { 'name': '欺诈师', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [10, 65], 'describe': '四选二(取悦,话术,恐吓,说服)、二选一(法律,外语:任一)、估价、技艺(表演)、聆听、心理学、妙手', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '法律' }, { 'name': '外语' }] }, { 'name': '估价' }, { 'name': '技艺', 'sub_name': '表演' }, { 'name': '聆听' }, { 'name': '心理学' }, { 'name': '妙手' }, { 'name': '信用评级' }] },
    "独行罪犯": {
        'name': '独行罪犯', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "外貌"] }], '信用评级': [5, 65], 'describe': '二选一(技艺:表演,乔装)、二选一(格斗:任一,射击:任一)、二选一(锁匠,机械维修)、四选一(取悦,话术,恐吓,说服)、估价、潜行、心理学、侦查', 'skill': [
            { 'number': 1, 'area': 'list', 'list': [{ 'name': '技艺', 'sub_name': '表演' }, { 'name': '乔装' }] },
            { 'number': 1, 'area': 'list', 'list': [{ "name": "格斗:斗殴" }, { "name": "格斗" }, { "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] },
            { 'number': 1, 'area': 'list', 'list': [{ 'name': '锁匠' }, { 'name': '机械维修' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '估价' }, { 'name': '潜行' }, { 'name': '心理学' }, { 'name': '侦查' }, { 'name': '信用评级' }]
    },
    "女飞贼(古典)": { 'name': '女飞贼(古典)', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [10, 80], 'describe': '四选二(取悦,话术,恐吓,说服)、二选一(格斗:斗殴,射击:任一)、技艺(任一)、汽车驾驶、聆听、潜行、其他个人或时代特长(任一)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '格斗', 'sub_name': '斗殴' }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] },] }, { 'name': '技艺' }, { 'name': '汽车驾驶' }, { 'name': '聆听' }, { 'name': '潜行' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "赃物贩子": { 'name': '赃物贩子', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [20, 40], 'describe': '四选一(取悦,话术,恐吓,说服)、会计、估价、技艺(伪造)、历史、图书馆使用、侦查、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '估价' }, { 'name': '技艺', 'sub_name': '伪造' }, { 'name': '历史' }, { 'name': '图书馆使用' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "赝造者": { 'name': '赝造者', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [20, 60], 'describe': '会计、估价、技艺(伪造)、历史、图书馆使用、侦查、妙手、其他个人或时代特长(任一)', 'skill': [{ 'name': '会计' }, { 'name': '估价' }, { 'name': '技艺', 'sub_name': '伪造' }, { 'name': '历史' }, { 'name': '图书馆使用' }, { 'name': '侦查' }, { 'name': '妙手' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "走私者": { 'name': '走私者', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "外貌"] }], '信用评级': [20, 60], 'describe': '三选一(汽车驾驶,驾驶:飞行器,驾驶:船)、四选一(取悦,话术,恐吓,说服)、射击(任一)、聆听、导航、心理学、妙手、侦查', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '汽车驾驶' }, { 'name': '驾驶', 'sub_name': '飞行器' }, { 'name': '驾驶', 'sub_name': '船' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '聆听' }, { 'name': '导航' }, { 'name': '心理学' }, { 'name': '妙手' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "混混": { 'name': '混混', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [3, 10], 'describe': '四选一(取悦,话术,恐吓,说服)、攀爬、格斗(任一)、射击(任一)、跳跃、妙手、潜行、投掷', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '攀爬' }, { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '跳跃' }, { 'name': '妙手' }, { 'name': '潜行' }, { 'name': '投掷' }, { 'name': '信用评级' }] },
    "军官": { 'name': '军官', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [20, 70], 'describe': '四选二(取悦,话术,恐吓,说服)、会计、射击(任一)、导航、急救、心理学、其他个人或时代特长(任一)', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '导航' }, { 'name': '急救' }, { 'name': '心理学' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "海军": { 'name': '海军', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [9, 30], 'describe': '二选一(电气维修,机械维修)、格斗(任一)、射击(任一)、急救、导航、驾驶(船)、生存(海上)、游泳', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '电气维修' }, { 'name': '机械维修' }] }, { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '急救' }, { 'name': '导航' }, { 'name': '驾驶', 'sub_name': '船' }, { 'name': '生存', 'sub_name': '海上' }, { 'name': '游泳' }, { 'name': '信用评级' }] },
    "间谍": { 'name': '间谍', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "外貌"] }], '信用评级': [20, 60], 'describe': '二选一(技艺:表演,乔装)、四选一(取悦,话术,恐吓,说服)、射击(任一)、聆听、外语(任一)、心理学、妙手、潜行', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '技艺', 'sub_name': '表演' }, { 'name': '乔装' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '聆听' }, { 'name': '外语' }, { 'name': '心理学' }, { 'name': '妙手' }, { 'name': '潜行' }, { 'name': '信用评级' }] },
    "士兵": { 'name': '士兵', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [9, 30], 'describe': '二选一(攀爬,游泳)、二选一(机械维修,外语:任一)、闪避、格斗(任一)、射击(任一)、潜行、生存(任一)、急救', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '攀爬' }, { 'name': '游泳' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '机械维修' }, { 'name': '外语' }] }, { 'name': '闪避' }, { "number": 1, "area": "list", "list": [{ "name": "格斗:斗殴" }, { "name": "格斗" }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '潜行' }, { 'name': '生存' }, { 'name': '急救' }, { 'name': '信用评级' }] },
    "警探(原作向)": { 'name': '警探(原作向)', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [20, 50], 'describe': '二选一(技艺:表演,乔装)、四选一(取悦,话术,恐吓,说服)、射击(任一)、法律、聆听、心理学、侦查、其他个人或时代特长(任一)', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '技艺', 'sub_name': '表演' }, { 'name': '乔装' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '法律' }, { 'name': '聆听' }, { 'name': '心理学' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "巡警(原作向)": { 'name': '巡警(原作向)', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [9, 30], 'describe': '二选一(汽车驾驶,骑术)、四选一(取悦,话术,恐吓,说服)、格斗:斗殴、射击(任一)、急救、法律、心理学、侦查', 'skill': [{ 'number': 1, 'area': 'list', 'list': [{ 'name': '汽车驾驶' }, { 'name': '骑术' }] }, { 'number': 1, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '格斗:斗殴' }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '急救' }, { 'name': '法律' }, { 'name': '心理学' }, { 'name': '侦查' }, { 'name': '信用评级' }] },
    "消防员": { 'name': '消防员', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["敏捷", "力量"] }], '信用评级': [9, 30], 'describe': '攀爬、闪避、汽车驾驶、急救、跳跃、机械维修、操作重型机械、投掷', 'skill': [{ 'name': '攀爬' }, { 'name': '闪避' }, { 'name': '汽车驾驶' }, { 'name': '急救' }, { 'name': '跳跃' }, { 'name': '机械维修' }, { 'name': '操作重型机械' }, { 'name': '投掷' }, { 'name': '信用评级' }] },
    "法官": { 'name': '法官', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [50, 80], 'describe': '历史、恐吓、法律、图书馆使用、聆听、母语(任一)、说服、心理学', 'skill': [{ 'name': '历史' }, { 'name': '恐吓' }, { 'name': '法律' }, { 'name': '图书馆使用' }, { 'name': '聆听' }, { 'name': '母语' }, { 'name': '说服' }, { 'name': '心理学' }, { 'name': '信用评级' }] },
    "司法人员": { 'name': '司法人员', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [20, 40], 'describe': '汽车驾驶、格斗:斗殴、射击(任一)、法律、说服、潜行、侦查、其他个人或时代特长(任一)', 'skill': [{ 'name': '汽车驾驶' }, { 'name': '格斗:斗殴' }, { "number": 1, "area": "list", "list": [{ "name": "射击:手枪" }, { "name": "射击:步/霰" }, { "name": "射击" }] }, { 'name': '法律' }, { 'name': '说服' }, { 'name': '潜行' }, { 'name': '侦查' }, { 'number': 1, 'area': 'all' }, { 'name': '信用评级' }] },
    "政府官员": { 'name': '政府官员', "workPoints": [{ "scale": 2, "att": ["教育"] }, { "scale": 2, "att": ["外貌"] }], '信用评级': [50, 90], 'describe': '取悦、历史、恐吓、话术、聆听、母语(任一)、说服、心理学', 'skill': [{ 'name': '取悦' }, { 'name': '历史' }, { 'name': '恐吓' }, { 'name': '话术' }, { 'name': '聆听' }, { 'name': '母语' }, { 'name': '说服' }, { 'name': '心理学' }, { 'name': '信用评级' }] },
    "工会活动家": { 'name': '工会活动家', "workPoints": [{ "scale": 4, "att": ["教育"] }], '信用评级': [5, 50], 'describe': '四选二(取悦,话术,恐吓,说服)、会计、格斗:斗殴、法律、聆听、操作重型机械、心理学', 'skill': [{ 'number': 2, 'area': 'list', 'list': [{ 'name': '取悦' }, { 'name': '话术' }, { 'name': '恐吓' }, { 'name': '说服' }] }, { 'name': '会计' }, { 'name': '格斗:斗殴' }, { 'name': '法律' }, { 'name': '聆听' }, { 'name': '操作重型机械' }, { 'name': '心理学' }, { 'name': '信用评级' }] },





}


export const weapon_options = [
    {
        label: '常规',
        value: '常规',
        children: [
            { label: '徒手', value: '徒手' },
            { label: '弓箭', value: '弓箭' },
            { label: '黄铜指虎', value: '黄铜指虎' },
            { label: '长鞭', value: '长鞭' },
            { label: '燃烧的火把', value: '燃烧的火把' },
            { label: '链锯', value: '链锯' },
            { label: '包革金属棒(大头棍、护身棒)', value: '包革金属棒(大头棍、护身棒)' },
            { label: '大棒(棒球棒、拨火棍)', value: '大棒(棒球棒、拨火棍)' },
            { label: '小型棍棒(警棍)', value: '小型棍棒(警棍)' },
            { label: '弩', value: '弩' },
            { label: '绞索', value: '绞索' },
            { label: '手斧/手镰', value: '手斧/手镰' },
            { label: '大型刀(甘蔗刀等)', value: '大型刀(甘蔗刀等)' },
            { label: '中型刀(切肉餐刀等)', value: '中型刀(切肉餐刀等)' },
            { label: '小型刀(弹簧折叠刀等)', value: '小型刀(弹簧折叠刀等)' },
            { label: '220V通电导线', value: '220V通电导线' },
            { label: '催泪喷雾', value: '催泪喷雾' },
            { label: '双节棍', value: '双节棍' },
            { label: '投石', value: '投石' },
            { label: '手里剑', value: '手里剑' },
            { label: '矛、骑士长枪', value: '矛、骑士长枪' },
            { label: '投矛', value: '投矛' },
            { label: '大型剑(马刀)', value: '大型剑(马刀)' },
            { label: '中型剑(佩剑、重剑)', value: '中型剑(佩剑、重剑)' },
            { label: '轻型剑(花剑、剑杖)', value: '轻型剑(花剑、剑杖)' },
            { label: '电棍', value: '电棍' },
            { label: '电击枪', value: '电击枪' },
            { label: '战斗回力镖', value: '战斗回力镖' },
            { label: '伐木斧', value: '伐木斧' },
        ],
    },
    {
        label: '手枪',
        value: '手枪',
        children: [
            { label: '燧发手枪', value: '燧发手枪' },
            { label: '.22(5.6mm)小型自动手枪', value: '.22(5.6mm)小型自动手枪' },
            { label: '.25(6.35mm)短口手枪(单管)', value: '.25(6.35mm)短口手枪(单管)' },
            { label: '.32(7.65mm)左轮', value: '.32(7.65mm)左轮' },
            { label: '.32(7.65mm)自动手枪', value: '.32(7.65mm)自动手枪' },
            { label: '.357马格南左轮', value: '.357马格南左轮' },
            { label: '.38(9mm)左轮', value: '.38(9mm)左轮' },
            { label: '.38(9mm)自动手枪', value: '.38(9mm)自动手枪' },
            { label: '贝瑞塔M9', value: '贝瑞塔M9' },
            { label: '9mm格洛克17', value: '9mm格洛克17' },
            { label: '9mm鲁格P08', value: '9mm鲁格P08' },
            { label: '.41(10.4mm)左轮', value: '.41(10.4mm)左轮' },
            { label: '.44(11.2mm)马格南左轮', value: '.44(11.2mm)马格南左轮' },
            { label: '.45(11.43mm)左轮', value: '.45(11.43mm)左轮' },
            { label: '.45(11.43mm)自动手枪', value: '.45(11.43mm)自动手枪' },
            { label: 'IMI 沙漠之鹰', value: 'IMI 沙漠之鹰' },
        ],
    },
    {
        label: '半自动步枪',
        value: '半自动步枪',
        children: [
            { label: ".58 (14.7mm)1855年式春田步枪", value: ".58 (14.7mm)1855年式春田步枪" },
            { label: ".22 (5.6mm)栓式枪机步枪", value: ".22 (5.6mm)栓式枪机步枪" },
            { label: ".30 (7.62mm)杠杆式枪机步枪", value: ".30 (7.62mm)杠杆式枪机步枪" },
            { label: ".45 (11.43mm)马蒂尼-亨利步枪", value: ".45 (11.43mm)马蒂尼-亨利步枪" },
            { label: "莫兰上校的气动步枪③", value: "莫兰上校的气动步枪③" },
            { label: "加兰德M1、M2步枪", value: "加兰德M1、M2步枪" },
            { label: "SKS半自动步枪(56半)", value: "SKS半自动步枪(56半)" },
            { label: ".303(7.7mm)李-恩菲尔德", value: ".303(7.7mm)李-恩菲尔德" },
            { label: ".30-06(7.62mm)手动枪机步枪", value: ".30-06(7.62mm)手动枪机步枪" },
            { label: ".30-06(7.62mm)半自动步枪", value: ".30-06(7.62mm)半自动步枪" },
            { label: ".444(11.28mm)马林步枪", value: ".444(11.28mm)马林步枪" },
            { label: "猎象枪(双管)", value: "猎象枪(双管)" },
        ],
    },
    {
        label: '全自动步枪',
        value: '全自动步枪',
        children: [
            { label: "AK-47或AKM", value: "AK-47或AKM" },
            { label: "AK-74", value: "AK-74" },
            { label: "FN FAL 突击步枪", value: "FN FAL 突击步枪" },
            { label: "加利尔突击步枪", value: "加利尔突击步枪" },
            { label: "M16A2", value: "M16A2" },
            { label: "M4", value: "M4" },
            { label: "斯泰尔AUG", value: "斯泰尔AUG" },
            { label: "贝雷塔AR70/90", value: "贝雷塔AR70/90" },
        ],
    },
    {
        label: '霰弹枪',
        value: '霰弹枪',
        children: [
            { label: "20号霰弹枪(双管)", value: "20号霰弹枪(双管)" },
            { label: "16号霰弹枪(双管)", value: "16号霰弹枪(双管)" },
            { label: "12号霰弹枪(双管)", value: "12号霰弹枪(双管)" },
            { label: "12号霰弹枪(手压式)", value: "12号霰弹枪(手压式)" },
            { label: "12号霰弹枪(半自动)", value: "12号霰弹枪(半自动)" },
            { label: "12号霰弹枪(双管,锯短)", value: "12号霰弹枪(双管,锯短)" },
            { label: "10号霰弹枪(双管)", value: "10号霰弹枪(双管)" },
            { label: "12号贝里尼M3(折叠式枪托)", value: "12号贝里尼M3(折叠式枪托)" },
            { label: "12号SPAS (折叠式枪托)", value: "12号SPAS (折叠式枪托)" },
        ],
    },
    {
        label: '冲锋枪',
        value: '冲锋枪',
        children: [
            { label: "MP18I/M现代28II", value: "MP18I/M现代28II" },
            { label: "MP5", value: "MP5" },
            { label: "MAC-11", value: "MAC-11" },
            { label: "蝎式", value: "蝎式" },
            { label: "汤普森", value: "汤普森" },
            { label: "乌兹", value: "乌兹" },
        ],
    },
    {
        label: '狙击步枪',
        value: '狙击步枪',
        children: [
            { label: "巴雷特M82", value: "巴雷特M82" },
            { label: "PTRD-41反坦克步枪", value: "PTRD-41反坦克步枪" },
        ],
    },
    {
        label: '机枪',
        value: '机枪',
        children: [
            { label: "1882年式加特林", value: "1882年式加特林" },
            { label: "M1918式勃朗宁自动步枪", value: "M1918式勃朗宁自动步枪" },
            { label: "勃朗宁M1917A1(7.62mm)", value: "勃朗宁M1917A1(7.62mm)" },
            { label: "布伦轻机枪", value: "布伦轻机枪" },
            { label: "路易斯Ⅰ型机枪", value: "路易斯Ⅰ型机枪" },
            { label: "GE M134式7.62mm速射机枪", value: "GE M134式7.62mm速射机枪" },
            { label: "FN 米尼米，弹夹/弹带", value: "FN 米尼米，弹夹/弹带" },
            { label: "维克斯.303机枪", value: "维克斯.303机枪" },
        ],
    },
    {
        label: '其它',
        value: '其它',
        children: [
            { label: "莫洛托夫鸡尾酒", value: "莫洛托夫鸡尾酒" },
            { label: "信号枪(信号弹枪)", value: "信号枪(信号弹枪)" },
            { label: "M79式40mm榴弹发射器", value: "M79式40mm榴弹发射器" },
            { label: "炸药棒", value: "炸药棒" },
            { label: "雷管", value: "雷管" },
            { label: "爆破筒", value: "爆破筒" },
            { label: "塑胶炸弹(C-4)，4盎司", value: "塑胶炸弹(C-4)，4盎司" },
            { label: "手榴弹", value: "手榴弹" },
            { label: "81mm迫击炮", value: "81mm迫击炮" },
            { label: "75mm野战火炮", value: "75mm野战火炮" },
            { label: "120mm坦克主炮", value: "120mm坦克主炮" },
            { label: "5英寸(127mm)舰炮", value: "5英寸(127mm)舰炮" },
            { label: "反步兵地雷", value: "反步兵地雷" },
            { label: "阔剑地雷", value: "阔剑地雷" },
            { label: "火焰喷射器", value: "火焰喷射器" },
            { label: "M72式单发轻型反坦克炮", value: "M72式单发轻型反坦克炮" },
        ],
    },
]

export const weapon_default: { [key: string]: any } = {
    "徒手": {
        '名称': '徒手',
        "伤害": "1D3+DB",
        "次数": 1,
        "贯穿": false,
        "射程": "接触",
        "装弹量": -1,
        "故障率": -1
    },
    "弓箭": { '名称': '弓箭', '伤害': '1D6+半DB', '次数': 1, '贯穿': false, '射程': '30m', '装弹量': 1, '故障率': 97 },
    "黄铜指虎": { '名称': '黄铜指虎', '伤害': '1D3+1+DB', '次数': 1, '贯穿': false, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "长鞭": { '名称': '长鞭', '伤害': '1D3+半DB', '次数': 1, '贯穿': false, '射程': '3m', '装弹量': -1, '故障率': 97 },
    "燃烧的火把": { '名称': '燃烧的火把', '伤害': '1D6+燃烧', '次数': 1, '贯穿': false, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "链锯": { '名称': '链锯', '伤害': '2D8', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': 95 },
    "包革金属棒(大头棍、护身棒)": { '名称': '包革金属棒(大头棍、护身棒)', '伤害': '1D8+DB', '次数': 1, '贯穿': false, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "大棒(棒球棒、拨火棍)": { '名称': '大棒(棒球棒、拨火棍)', '伤害': '1D8+DB', '次数': 1, '贯穿': false, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "小型棍棒(警棍)": { '名称': '小型棍棒(警棍)', '伤害': '1D6+DB', '次数': 1, '贯穿': false, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "弩": { '名称': '弩', '伤害': '1D8+2', '次数': 1, '贯穿': true, '射程': '50m', '装弹量': 1, '故障率': 96 },
    "绞索": { '名称': '绞索', '伤害': '1D6+DB', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "手斧/手镰": { '名称': '手斧/手镰', '伤害': '1D6+1+DB', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "大型刀(甘蔗刀等)": { '名称': '大型刀(甘蔗刀等)', '伤害': '1D8+DB', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "中型刀(切肉餐刀等)": { '名称': '中型刀(切肉餐刀等)', '伤害': '1D4+2+DB', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "小型刀(弹簧折叠刀等)": { '名称': '小型刀(弹簧折叠刀等)', '伤害': '1D4+DB', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "220V通电导线": { '名称': '220V通电导线', '伤害': '2D8+晕', '次数': 1, '贯穿': false, '射程': '接触', '装弹量': -1, '故障率': 95 },
    "催泪喷雾": { '名称': '催泪喷雾', '伤害': '晕', '次数': 1, '贯穿': false, '射程': '2m', '装弹量': 25, '故障率': -1 },
    "双节棍": { '名称': '双节棍', '伤害': '1D8+DB', '次数': 1, '贯穿': false, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "投石": { '名称': '投石', '伤害': '1D4+半DB', '次数': 1, '贯穿': false, '射程': 'STR/5m', '装弹量': -1, '故障率': -1 },
    "手里剑": { '名称': '手里剑', '伤害': '1D3+半DB', '次数': 2, '贯穿': true, '射程': 'STR/5m', '装弹量': 1, '故障率': 100 },
    "矛、骑士长枪": { '名称': '矛、骑士长枪', '伤害': '1D8+1', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "投矛": { '名称': '投矛', '伤害': '1D8+半DB', '次数': 1, '贯穿': true, '射程': 'STR/5m', '装弹量': -1, '故障率': -1 },
    "大型剑(马刀)": { '名称': '大型剑(马刀)', '伤害': '1D8+1+DB', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "中型剑(佩剑、重剑)": { '名称': '中型剑(佩剑、重剑)', '伤害': '1D6+1+DB', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "轻型剑(花剑、剑杖)": { '名称': '轻型剑(花剑、剑杖)', '伤害': '1D6+DB', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "电棍": { '名称': '电棍', '伤害': '1D3+晕', '次数': 1, '贯穿': false, '射程': '接触', '装弹量': -1, '故障率': 97 },
    "电击枪": { '名称': '电击枪', '伤害': '1D3+晕', '次数': 1, '贯穿': false, '射程': '5m', '装弹量': 3, '故障率': 95 },
    "战斗回力镖": { '名称': '战斗回力镖', '伤害': '1D8+半DB', '次数': 1, '贯穿': false, '射程': 'STR/5m', '装弹量': -1, '故障率': -1 },
    "伐木斧": { '名称': '伐木斧', '伤害': '1D8+2+DB', '次数': 1, '贯穿': true, '射程': '接触', '装弹量': -1, '故障率': -1 },
    "燧发手枪": { '名称': '燧发手枪', '伤害': '1D6+1', '次数': 1, '贯穿': true, '射程': '10m', '装弹量': 1, '故障率': 95 },
    ".22(5.6mm)小型自动手枪": { '名称': '.22(5.6mm)小型自动手枪', '伤害': '1D6', '次数': 1, '贯穿': true, '射程': '10m', '装弹量': 6, '故障率': 100 },
    ".25(6.35mm)短口手枪(单管)": { '名称': '.25(6.35mm)短口手枪(单管)', '伤害': '1D6', '次数': 1, '贯穿': true, '射程': '3m', '装弹量': 1, '故障率': 100 },
    ".32(7.65mm)左轮": { '名称': '.32(7.65mm)左轮', '伤害': '1D8', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 6, '故障率': 100 },
    ".32(7.65mm)自动手枪": { '名称': '.32(7.65mm)自动手枪', '伤害': '1D8', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 8, '故障率': 99 },
    ".357马格南左轮": { '名称': '.357马格南左轮', '伤害': '1D8+1D4', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 6, '故障率': 100 },
    ".38(9mm)左轮": { '名称': '.38(9mm)左轮', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 6, '故障率': 100 },
    ".38(9mm)自动手枪": { '名称': '.38(9mm)自动手枪', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 8, '故障率': 99 },
    "贝瑞塔M9": { '名称': '贝瑞塔M9', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 15, '故障率': 98 },
    "9mm格洛克17": { '名称': '9mm格洛克17', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 17, '故障率': 98 },
    "9mm鲁格P08": { '名称': '9mm鲁格P08', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 8, '故障率': 99 },
    ".41(10.4mm)左轮": { '名称': '.41(10.4mm)左轮', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 8, '故障率': 100 },
    ".44(11.2mm)马格南左轮": { '名称': '.44(11.2mm)马格南左轮', '伤害': '1D10+1D4+2', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 6, '故障率': 100 },
    ".45(11.43mm)左轮": { '名称': '.45(11.43mm)左轮', '伤害': '1D10+2', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 6, '故障率': 100 },
    ".45(11.43mm)自动手枪": { '名称': '.45(11.43mm)自动手枪', '伤害': '1D10+2', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 7, '故障率': 100 },
    "IMI 沙漠之鹰": { '名称': 'IMI 沙漠之鹰', '伤害': '1D10+1D6+3', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 7, '故障率': 94 },
    ".58 (14.7mm)1855年式春田步枪": { '名称': '.58 (14.7mm)1855年式春田步枪', '伤害': '1D10+4', '次数': 1, '贯穿': true, '射程': '60m', '装弹量': 1, '故障率': 95 },
    ".22 (5.6mm)栓式枪机步枪": { '名称': '.22 (5.6mm)栓式枪机步枪', '伤害': '1D6+1', '次数': 1, '贯穿': true, '射程': '30m', '装弹量': 6, '故障率': 99 },
    ".30 (7.62mm)杠杆式枪机步枪": { '名称': '.30 (7.62mm)杠杆式枪机步枪', '伤害': '2D6', '次数': 1, '贯穿': true, '射程': '50m', '装弹量': 6, '故障率': 98 },
    ".45 (11.43mm)马蒂尼-亨利步枪": { '名称': '.45 (11.43mm)马蒂尼-亨利步枪', '伤害': '1D8+1D6+3', '次数': 1, '贯穿': true, '射程': '80m', '装弹量': 1, '故障率': 100 },
    "莫兰上校的气动步枪③": { '名称': '莫兰上校的气动步枪③', '伤害': '2D6+1', '次数': 1, '贯穿': true, '射程': '20m', '装弹量': 1, '故障率': 88 },
    "加兰德M1、M2步枪": { '名称': '加兰德M1、M2步枪', '伤害': '2D6+4', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 8, '故障率': 100 },
    "SKS半自动步枪(56半)": { '名称': 'SKS半自动步枪(56半)', '伤害': '2D6+1', '次数': 1, '贯穿': true, '射程': '90m', '装弹量': 10, '故障率': 97 },
    ".303(7.7mm)李-恩菲尔德": { '名称': '.303(7.7mm)李-恩菲尔德', '伤害': '2D6+4', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 5, '故障率': 100 },
    ".30-06(7.62mm)手动枪机步枪": { '名称': '.30-06(7.62mm)手动枪机步枪', '伤害': '2D6+4', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 5, '故障率': 100 },
    ".30-06(7.62mm)半自动步枪": { '名称': '.30-06(7.62mm)半自动步枪', '伤害': '2D6+4', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 5, '故障率': 100 },
    ".444(11.28mm)马林步枪": { '名称': '.444(11.28mm)马林步枪', '伤害': '2D8+4', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 5, '故障率': 98 },
    "猎象枪(双管)": { '名称': '猎象枪(双管)', '伤害': '3D6+4', '次数': 1, '贯穿': true, '射程': '100m', '装弹量': 2, '故障率': 100 },
    "AK-47或AKM": { '名称': 'AK-47或AKM', '伤害': '2D6+1', '次数': 1, '贯穿': true, '射程': '100m', '装弹量': 30, '故障率': 100 },
    "AK-74": { '名称': 'AK-74', '伤害': '2D6+1', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 30, '故障率': 97 },
    "FN FAL 突击步枪": { '名称': 'FN FAL 突击步枪', '伤害': '2D6+4', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 20, '故障率': 97 },
    "加利尔突击步枪": { '名称': '加利尔突击步枪', '伤害': '2D6', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 20, '故障率': 98 },
    "M16A2": { '名称': 'M16A2', '伤害': '2D6', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 30, '故障率': 97 },
    "M4": { '名称': 'M4', '伤害': '2D6', '次数': 1, '贯穿': true, '射程': '90m', '装弹量': 30, '故障率': 97 },
    "斯泰尔AUG": { '名称': '斯泰尔AUG', '伤害': '2D6', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 30, '故障率': 99 },
    "贝雷塔AR70/90": { '名称': '贝雷塔AR70/90', '伤害': '2D6', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 30, '故障率': 99 },
    "20号霰弹枪(双管)": { '名称': '20号霰弹枪(双管)', '伤害': '2D6/1D6/1D3', '次数': 1, '贯穿': false, '射程': '10/20/50', '装弹量': 2, '故障率': 100 },
    "16号霰弹枪(双管)": { '名称': '16号霰弹枪(双管)', '伤害': '2D6+2/1D6+1/1D4', '次数': 1, '贯穿': false, '射程': '10/20/50', '装弹量': 2, '故障率': 100 },
    "12号霰弹枪(双管)": { '名称': '12号霰弹枪(双管)', '伤害': '4D6/2D6/1D6', '次数': 1, '贯穿': false, '射程': '10/20/50', '装弹量': 2, '故障率': 100 },
    "12号霰弹枪(手压式)": { '名称': '12号霰弹枪(手压式)', '伤害': '4D6/2D6/1D6', '次数': 1, '贯穿': false, '射程': '10/20/50', '装弹量': 5, '故障率': 100 },
    "12号霰弹枪(半自动)": { '名称': '12号霰弹枪(半自动)', '伤害': '4D6/2D6/1D6', '次数': 1, '贯穿': false, '射程': '10/20/50', '装弹量': 5, '故障率': 100 },
    "12号霰弹枪(双管,锯短)": { '名称': '12号霰弹枪(双管,锯短)', '伤害': '4D6/1D6', '次数': 1, '贯穿': false, '射程': '5/10', '装弹量': 2, '故障率': 100 },
    "10号霰弹枪(双管)": { '名称': '10号霰弹枪(双管)', '伤害': '4D6+2/2D6+1/1D4', '次数': 1, '贯穿': false, '射程': '10/20/50', '装弹量': 2, '故障率': 100 },
    "12号贝里尼M3(折叠式枪托)": { '名称': '12号贝里尼M3(折叠式枪托)', '伤害': '4D6/2D6/1D6', '次数': 1, '贯穿': false, '射程': '10/20/50', '装弹量': 7, '故障率': 100 },
    "12号SPAS (折叠式枪托)": { '名称': '12号SPAS (折叠式枪托)', '伤害': '4D6/2D6/1D6', '次数': 1, '贯穿': false, '射程': '10/20/50', '装弹量': 8, '故障率': 98 },
    "MP18I/M现代28II": { '名称': 'MP18I/M现代28II', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '20m', '装弹量': 32, '故障率': 96 },
    "MP5": { '名称': 'MP5', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '20m', '装弹量': 30, '故障率': 97 },
    "MAC-11": { '名称': 'MAC-11', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 32, '故障率': 96 },
    "蝎式": { '名称': '蝎式', '伤害': '1D8', '次数': 1, '贯穿': true, '射程': '15m', '装弹量': 20, '故障率': 96 },
    "汤普森": { '名称': '汤普森', '伤害': '1D10+2', '次数': 1, '贯穿': true, '射程': '20m', '装弹量': 50, '故障率': 96 },
    "乌兹": { '名称': '乌兹', '伤害': '1D10', '次数': 1, '贯穿': true, '射程': '20m', '装弹量': 32, '故障率': 98 },
    "巴雷特M82": { '名称': '巴雷特M82', '伤害': '2D10+1D8+6', '次数': 1, '贯穿': true, '射程': '250m', '装弹量': 11, '故障率': 96 },
    "PTRD-41反坦克步枪": { '名称': 'PTRD-41反坦克步枪', '伤害': '2D10+1D10+8', '次数': 1, '贯穿': true, '射程': '230m', '装弹量': 5, '故障率': 94 },
    "1882年式加特林": { '名称': '1882年式加特林', '伤害': '2D6+4', '贯穿': true, '射程': '100m', '装弹量': 200, '故障率': 96 },
    "M1918式勃朗宁自动步枪": { '名称': 'M1918式勃朗宁自动步枪', '伤害': '2D6+4', '次数': 1, '贯穿': true, '射程': '90m', '装弹量': 20, '故障率': 100 },
    "勃朗宁M1917A1(7.62mm)": { '名称': '勃朗宁M1917A1(7.62mm)', '伤害': '2D6+4', '贯穿': true, '射程': '150m', '装弹量': 250, '故障率': 96 },
    "布伦轻机枪": { '名称': '布伦轻机枪', '伤害': '2D6+4', '次数': 1, '贯穿': true, '射程': '110m', '装弹量': 100, '故障率': 96 },
    "路易斯Ⅰ型机枪": { '名称': '路易斯Ⅰ型机枪', '伤害': '2D6+4', '贯穿': true, '射程': '110m', '装弹量': 97, '故障率': 96 },
    "GE M134式7.62mm速射机枪": { '名称': 'GE M134式7.62mm速射机枪', '伤害': '2D6+4', '贯穿': true, '射程': '200m', '装弹量': 4000, '故障率': 98 },
    "FN 米尼米，弹夹/弹带": { '名称': 'FN 米尼米，弹夹/弹带', '伤害': '2D6', '贯穿': true, '射程': '110m', '装弹量': 200, '故障率': 99 },
    "维克斯.303机枪": { '名称': '维克斯.303机枪', '伤害': '2D6+4', '贯穿': true, '射程': '110m', '装弹量': 250, '故障率': 99 },
    "莫洛托夫鸡尾酒": { '名称': '莫洛托夫鸡尾酒', '伤害': '2D6 烧', '次数': 1, '贯穿': true, '射程': 'STRft', '装弹量': -1, '故障率': 95 },
    "信号枪(信号弹枪)": { '名称': '信号枪(信号弹枪)', '伤害': '1D10+1D3 烧', '次数': 1, '贯穿': true, '射程': '10m', '装弹量': 1, '故障率': 100 },
    "M79式40mm榴弹发射器": { '名称': 'M79式40mm榴弹发射器', '伤害': '3D10/2码', '次数': 1, '贯穿': true, '射程': '20m', '装弹量': 1, '故障率': 99 },
    "炸药棒": { '名称': '炸药棒', '伤害': '4D10/3码', '次数': 1, '贯穿': true, '射程': 'STRft', '装弹量': -1, '故障率': 99 },
    "雷管": { '名称': '雷管', '伤害': '2D10/1码', '贯穿': true, '射程': 'N/A', '装弹量': -1, '故障率': 100 },
    "爆破筒": { '名称': '爆破筒', '伤害': '1D10/3码', '次数': 1, '贯穿': true, '射程': '即地', '装弹量': -1, '故障率': 95 },
    "塑胶炸弹(C-4)，4盎司": { '名称': '塑胶炸弹(C-4)，4盎司', '伤害': '6D10/3码', '次数': 1, '贯穿': true, '射程': '即地', '装弹量': -1, '故障率': 99 },
    "手榴弹": { '名称': '手榴弹', '伤害': '4D10/3码', '次数': 1, '贯穿': true, '射程': 'STRft', '装弹量': -1, '故障率': 99 },
    "81mm迫击炮": { '名称': '81mm迫击炮', '伤害': '6D10/6码', '次数': 1, '贯穿': true, '射程': '500m', '装弹量': -1, '故障率': 100 },
    "75mm野战火炮": { '名称': '75mm野战火炮', '伤害': '10D10/2码', '次数': 1, '贯穿': true, '射程': '500m', '装弹量': -1, '故障率': 99 },
    "120mm坦克主炮": { '名称': '120mm坦克主炮', '伤害': '10D10/2码', '次数': 1, '贯穿': true, '射程': '2000m', '装弹量': -1, '故障率': 100 },
    "5英寸(127mm)舰炮": { '名称': '5英寸(127mm)舰炮', '伤害': '15D10/4码', '次数': 1, '贯穿': true, '射程': '3000m', '装弹量': -1, '故障率': 98 },
    "反步兵地雷": { '名称': '反步兵地雷', '伤害': '4D10/5码', '次数': 1, '贯穿': true, '射程': '即地', '装弹量': -1, '故障率': 99 },
    "阔剑地雷": { '名称': '阔剑地雷', '伤害': '6D6/20码', '次数': 1, '贯穿': true, '射程': '即地', '装弹量': -1, '故障率': 99 },
    "火焰喷射器": { '名称': '火焰喷射器', '伤害': '2D6+烧', '次数': 1, '贯穿': true, '射程': '25m', '装弹量': -1, '故障率': 93 },
    "M72式单发轻型反坦克炮": { '名称': 'M72式单发轻型反坦克炮', '伤害': '8D10/1码', '次数': 1, '贯穿': true, '射程': '150m', '装弹量': 1, '故障率': 98 },
}

export const CR_default: { [key: string]: any } = {
    "1920s": {
        赤贫: {
            现金: 0.5,
            资产: 0,
            消费水平: 0.5,
        },
        贫穷: {
            现金: 1,
            资产: 10,
            消费水平: 2,
        },
        标准: {
            现金: 2,
            资产: 50,
            消费水平: 10,
        },
        小康: {
            现金: 5,
            资产: 500,
            消费水平: 50,
        },
        富裕: {
            现金: 20,
            资产: 2000,
            消费水平: 250,
        },
        豪富: {
            现金: 500,
            资产: 50000,
            消费水平: 5000,
        },
    },
    "现代": {
        赤贫: {
            现金: 0.5,
            资产: 0,
            消费水平: 10,
        },
        贫穷: {
            现金: 20,
            资产: 200,
            消费水平: 40,
        },
        标准: {
            现金: 40,
            资产: 1000,
            消费水平: 200,
        },
        小康: {
            现金: 100,
            资产: 10000,
            消费水平: 1000,
        },
        富裕: {
            现金: 400,
            资产: 40000,
            消费水平: 5000,
        },
        豪富: {
            现金: 10000,
            资产: 10000000,
            消费水平: 100000,
        },
    },
}

export const hero_options = [
    "冒险家", "猛士", "行乐者", "无情斗士", "梦想家",
    "极客", "探险者", "蛇蝎美人", "机械师", "反英雄",
    "幕后玩家", "老猎人", "寻秘者", "局外人", "叛逆浪人",
    "学者", "解谜人", "协助者", "殉道者", "侠客",
    "刺激寻者", "硬汉"
]

export const hero_default: { [key: string]: any } = {
    '冒险家': {
        'name': '冒险家',
        '描述': '无冒险，不生活！世界这么大，充满了机遇与挑战，有太多值得去体验的事物。办公桌后朝九晚五的生活对这样的人来说简直就是死刑。冒险家们渴望刺激、乐趣与挑战。',
        '核心属性': ['敏捷', '外貌'],
        '奖励点数': 100,
        '奖励技能': ['取悦', '潜水', '汽车驾驶', '急救', '格斗:斗殴', '格斗', '射击:手枪', '射击', '跳跃', '语言', '机械维修', '操纵', '骑术', '潜行', '生存', '游泳'],
        '建议职业': ['演员', '考古学家', '运动员', '特技飞行员', '银行劫匪', '猎人', '窃贼', '业余艺术爱好者', '流浪者', '赌徒', '黑帮分子', '游民', '调查记者', '传教士', '护士', '摄影师', '护林员', '士兵', '部落成员'],
        '天赋': '',
        '建议特质': ['容易无聊', '坚韧', '荣耀猎人', '自负']
    },
    '猛士': {
        'name': '猛士', 
        '描述': '强壮，肌肉发达，能够自行处理严峻的形势。力求追寻肉体的完美。你不会在图书馆中找到这类人，但可能会在广告牌上看到他们。猛士有两种类型：安静的，或是吵闹的。', 
        '核心属性': ['力量'], '奖励点数': 100, 
        '奖励技能': ['取悦', '格斗:斗殴', '格斗', '恐吓', '聆听', '机械维修', '精神分析', '游泳', '投掷'], 
        '建议职业': ['运动员', '警探', '猎人', '拳击手', '艺人', '黑帮', '打手', '游民', '临时工', '工人', '技师', '海员', '士兵', '混混', '部落成员'], '天赋': '', 
        '建议特质': ['专横', '傲慢', '安静的', '以自我中心', '不易怒', '容怒']
    },
    '行乐者': {
        'name': '行乐者', '描述': '行乐者是善于享受生活的人，但这并不意味着他们一定很有钱，虽然他们当中很多人已经习惯了财富。行乐者尽情享受生活而不去考虑后果。为什么到明天才能开始享受？美食和饮料，还有其他美好的事物，这些都是美好生活的关键。无论贫穷还是富有，这样的人都很少考虑储蓄以备不时之需，他们更愿意成为被人瞩目的焦点，愿意和所有人做朋友。', '核心属性': ['体型'], '奖励点数': 100, 
        '奖励技能': ['估价', '技艺', '取悦', '话术', '语言', '聆听', '侦查', '精神分析'], 
        '建议职业': ['演员', '艺术家', '管家', '欺诈师', '教团首领', '业余艺术爱好者', '政府官员', '艺人', '赌徒', '飞贼', '绅士/淑女', '军官', '音乐家', '神职人员', '教授', '狂热者'], '天赋': '', '建议特质': ['铺张浪费', '贪心', '松鼠党', '收藏家', '自信', '自负', '引人注目', '和善', '慷慨']
    },
    '无情斗士': {
        'name': '无情斗士', '描述': '万事皆允的理性主义者。无情斗士可能会遵循一些扭曲的道德准则，但他们看待人性时冷酷而死板——你是好人还是坏人？这当中没有灰色地带，只有攸关性命的严酷现实。他们都能成为合格的杀手，因为他们很少怀疑自己。他们从遵循信件中发来的指令，或是奉行自己的复仇计划。这样的人为了完成工作能够做出任何事。有时他们会欺骗自己，从而相信自己有一条绝不会跨过的“底线”，但事实上他们残忍而无情，会不遗余力地实现他们定下的目标。', '核心属性': ['智力'], '奖励点数': 100, 
        '奖励技能': ['技艺 ', '乔装', '格斗', '格斗:斗殴', '射击:手枪', '射击', '急救', '历史', '恐吓', '法律', '聆听', '机械维修', '精神分析', '潜行', '生存', '追踪'], 
        '建议职业': ['银行劫匪', '警探', '猎人', '教团首领', '流浪者', '驱魔师', '联邦探员', '黑帮', '飞贼', '打手', '刺客', '教授', '通讯记者', '士兵', '混混', '部落成员', '狂热者'], '天赋': '再任选另一项', '建议特质': ['理性主义者', '世界非黑即白', '残忍', '无情', '冷酷', '蛮横', '坚定']
    },
    '梦想家': {
        'name': '梦想家', '描述': '无论是理想主义者还是空想家，梦想家们都拥有强大而炽热的精神。他们往往都遵循着自己的生活目标。梦想家看起来超越了平凡的现实生活，也许是在逃避现实，也许他们向往未来的可能，希望能够纠正错误，或是改变世界。', '核心属性': ['意志'], '奖励点数': 100, 
        '奖励技能': ['技艺', '取悦', '历史', '语言', '图书馆使用', '聆听', '博物学', '神秘学'], 
        '建议职业': ['艺术家', '作家', '酒保/服务生', '神职人员', '教团首领', '业余艺术爱好者', '流浪者', '政府官员', '赌徒', '绅士/淑女', '游民', '性工作者', '图书馆管理员', '音乐家', '护士', '神秘学家', '教授', '秘书', '学生', '部落成员'], '天赋': '建议选择“钢铁意志”', '建议特质': ['理想主义者', '乐观主义者', '懒惰', '慷慨', '安静', '体贴', '总是迟到']
    },
    '极客': {
        'name': '极客', '描述': '万物皆可被拆解和分析以便了解其工作原理。知识是宝物，充满了探索的乐趣。谁说学者都是书呆子？极客们奉行实践主义，且不介意弄脏自己的手。无论电线、齿轮、阀门、计算机引擎还是血液和骨头，极客们都希望弄清楚它们是如何运转的。它们也许是出神的天才，或是犀利的艺术家，极客很容易专注于眼前的问题而忽视周围的事情。 根据游戏的通俗程度，极客可能会发明各种有用或无用的小玩意儿，详见怪奇技术，86页。', '核心属性': ['智力', '教育'], '奖励点数': 100, 
        '奖励技能': ['人类学', '估价', '计算机使用', '电气维修', '语言', '图书馆使用', '机械维修', '操作重型机械', '科学'], 
        '建议职业': ['管家', '教团首领', '医生', '工程师', '绅士/淑女', '调查记者', '技师', '神职人员', '科学家'], '天赋': '', '建议特质': ['学问渊博', '专注', '只注意眼前', '情报收集者', '不太注意周围', '缺乏常识', '发明家', '不可靠']
    },
    '探险者': {
        'name': '探险者', '描述': '“别拦我！”探险者经常如此喊着，向往真实而充实的生活。 他们意志坚强，几乎不可动摇，探险者一直在追寻地平线上的事物。 他很可能已经融入自然生活之中，满足于就地而眠，愉快地蔑视城市生活的舒适。 无论是穿越丛林，深入洞穴，还是简单地绘制城市中的隐藏区域，探险者常被他眼中的“弱者”或“懦夫”搞得焦躁不安，从而与他人格格不入。', '核心属性': ['敏捷', '意志'], '奖励点数': 100, 
        '奖励技能': ['驯兽', '人类学', '取悦', '格斗:斗殴', '格斗', '急救', '跳跃', '语言', '博物学', '导航', '操纵', '骑术', '潜行', '生存', '追踪'], '建议职业': ['事务所侦探', '考古学家', '猎人', '业余艺术爱好者', '探险家', '司机', '飞贼', '临时工', '调查记者', '传教士', '摄影师', '旅行家', '海员', '士兵', '部落成员'], '天赋': '', '建议特质': ['离群者', '勇敢', '不适应环境', '孤独', '乐观', '意志坚强', '天生的领袖', '不安']
    },
    '蛇蝎美人': {
        'name': '蛇蝎美人', '描述': '蛇蝎美人的外在美貌常常掩盖了她们以自我为中心，时刻保持警惕的生活方式，这导致她们对别人而言十分危险。蛇蝎美人会像蜘蛛一样，通过构建一个诱惑迷人的外貌形象，将其他人吸引到她的网上，以便夺其所好或毁其所恶。她们勇敢又狡猾，不羞于亲自动手，是个难缠的敌人。蛇蝎美人绝不蛮干，她会等到她的网织好后才会进行一次突然而适时的攻击（无论是精神还是肉体）。如果需要的话，一个典型的蛇蝎美人英雄很容易地被人认为是同性恋。 译注：男性英雄也可以选择该类型。', '核心属性': ['外貌', '智力'], '奖励点数': 100, 
        '奖励技能': ['技艺', '估价', '取悦', '乔装', '汽车驾驶', '话术', '格斗:斗殴', '射击:手枪', '格斗', '射击', '聆听', '精神分析', '妙手', '潜行'], '建议职业': ['演员', '事务所侦探', '作家', '窃贼', '欺诈师', '业余艺术爱好者', '政府官员', '艺人', '联邦探员', '黑帮', '飞贼', '刺客', '性工作者', '调查记者', '音乐家', '护士', '私家侦探', '通讯记者', '间谍', '狂热者'], '天赋': '建议选择“魅力四射”', '建议特质': ['迷人', '充满魅力', '性格恶劣', '狡诈', '滑头', '专注', '不诚实']
    },
    '机械师': {
        'name': '机械师', '描述': '机械师们很有想法，能够制造和修理各种各样的玩意儿，无论是有用的发明，机器，引擎还是其他设备。人们可能会在汽车引擎盖下找到机械师，或者发现他们正在玩弄着电话交换线。机械师通常都拥有一种“这个可以！”的处事态度，他们有能力充分利用手边的事物，搭配他们的技能和经验做出使旁人惊叹的事。 根据游戏的通俗程度，机械师或许能够制作各种用处不明的奇妙道具。详见怪奇技术。', '核心属性': ['智力'], '奖励点数': 100, 
        '奖励技能': ['估价', '技艺', '格斗:斗殴', '格斗', '汽车驾驶', '电气维修', '锁匠', '机械维修', '操作重型机械', '侦查', '投掷'], '建议职业': ['酒保/服务生', '管家', '窃贼', '私人司机', '流浪者', '工程师', '司机', '游民', '临时工', '技师', '海员', '士兵', '学生', '工会活动家'], '天赋': '', '建议特质': ['踏实', '亲力亲为', '工作认真', '油污', '有能力']
    },
    '反英雄': {
        'name': '反英雄', '描述': '反英雄们很清楚，想要抓住一个小偷，必须先像小偷一样思考。反英雄常常会为了达成目的而违反法律。他们在行动时会使用任何工具（不择手段），甚至砸碎别人的脑袋（草菅人命）。虽然他们的内在是希望世界不再那么卑鄙和污秽的诚实灵魂，但是，为了伸张正义，他们敢于弄脏自己的双手。', '核心属性': ['体质'], '奖励点数': 100, 
        '奖励技能': ['技艺', '格斗:斗殴', '射击:手枪', '格斗', '射击', '汽车驾驶', '话术', '恐吓', '法律', '聆听', '锁匠', '妙手', '侦查', '潜行', '投掷'], '建议职业': ['事务所侦探', '银行劫匪', '警探', '猎人', '拳击手', '黑帮', '飞贼', '工人', '警探', '私家侦探', '旅行家', '工会活动家'], '天赋': '', '建议特质': ['愤世嫉俗', '客观', '实用主义', '厌世', '腐败', '暴力']
    },
    '幕后玩家': {
        'name': '幕后玩家', '描述': '虽然类似于蛇蝎美人，但幕后玩家不喜欢亲自动手（如果这会有所帮助）。虽然幕后玩家不一定拥有传统意义上的亮丽外表，但他们通常具有足够吸引人的人格魅力。他们以从操纵他人达成自己的目的为乐趣，并且经常将自己的计划隐藏在显而易见的谎言或微不可查的欺骗背后。他们或许是为了某个上家服务，又或许单纯的只是混乱的代理人，通过观察人们面对他设下的陷阱时的反应取乐。', '核心属性': ['外貌'], '奖励点数': 100, 
        '奖励技能': ['技艺', '取悦', '乔装', '话术', '跳跃', '语言', '聆听', '说服', '精神分析', '妙手', '潜行'], '建议职业': ['演员', '事务所侦探', '艺术家', '酒保/服务生', '欺诈师', '教团首领', '业余艺术爱好者', '政府官员', '艺人', '赌徒', '绅士/淑女', '音乐家', '通讯记者', '秘书', '工会活动家', '狂热者'], '天赋': '', '建议特质': ['深谋远虑', '狡猾', '两面派', '好指使人', '无序', '狂野', '华丽']
    },
    '老猎人': {
        'name': '老猎人', '描述': '或许是追寻狩猎过程的刺激，或许是为了最终的战果，或许仅仅因为他们天生主宰一切的本能，老猎人在狩猎时总是冷酷无情。 沉着冷静，精于算计的老猎人更愿意等待最合适的时机，而鄙视粗心大意的鲁莽行为。', '核心属性': ['智力', '体质'], '奖励点数': 100, 
        '奖励技能': ['驯兽', '格斗:斗殴', '射击:手枪', '格斗', '射击', '急救', '聆听', '博物学', '导航', '侦查', '潜行', '生存', '游泳', '追踪'], '建议职业': ['事务所侦探', '银行劫匪', '警探', '猎人', '拳击手', '黑帮', '飞贼', '工人', '警探', '私家侦探', '旅行家', '工会活动家'], '天赋': '', '建议特质': ['无情', '狡猾', '耐心', '被驱使', '沉着', '安静']
    },
    '寻秘者': {
        'name': '寻秘者', '描述': '奥秘的探求者，未知领域的探索者。寻秘者致力于探知这个世界最基本的真理。他们可能是满腹经纶的学者，萨满教巫医，剧团占卜师或是空想家，无论是为了个人利益还是全人类的进步，他们都在追寻知识和超自然能力。如果守秘人同意，寻秘者可以拥有超乎想象的超自然力量。这类人经常受到迫害和猎杀，所以他们会对那些称自己为“巫师”的人隐瞒自己的“天赋”，外人则会认为他们只是江湖骗子或是小丑。这类英雄应该选择“灵能觉醒”天赋（原文如此），并允许他们为一个或多个灵能投入技能点，见灵能，83页。', '核心属性': ['意志'], '奖励点数': 100, 
        '奖励技能': ['技艺', '科学', '乔装', '历史', '催眠', '语言', '博物学', '神秘学', '精神分析', '妙手', '潜行', "遥视", "占卜", "灵媒", "心灵感应", "念动"], '建议职业': ['艺术家', '教团首领', '业余艺术爱好者', '驱魔师', '艺人', '神秘学家', '超心理学家', '部落成员'], '天赋': '建议选择“灵能觉醒”', '建议特质': ['深谋远虑', '狡猾', '两面派', '好指使人', '无序', '狂野', '华丽']
    },
    '局外人': {
        'name': '局外人', '描述': '无论是象征意义还是字面意思，局外人都与社会外界格格不入。这类人可能与他们生活的环境方枘圆凿，他们也许来自异国他乡，又或者虽然是社会的一部分，但却始终无法融入他们。局外人通常在肉体或精神上进行着某种形式的旅程，在他们回归或是融入集体之前，他们必须先完成自己的使命。大多局外人拥有独特的技能和处事方式，能够利用被外人遗忘的知识、秘密或是异端学识。', '核心属性': ['智力', '体质'], '奖励点数': 100, 
        '奖励技能': ['技艺 ', '驯兽', '格斗:斗殴', '格斗', '急救', '恐吓', '语言', '聆听', '医学', '导航', '潜行', '生存', '追踪'], '建议职业': ['艺术家', '流浪者', '探险家', '打手', '临时工', '工人', '护士', '神秘学家', '旅行家', '部落成员'], '天赋': '', '建议特质': ['冷酷', '安静', '超然', '冷漠', '残忍']
    },
    '叛逆浪人': {
        'name': '叛逆浪人', '描述': '叛逆狼人无视社会规则，敢于公开质疑现状，嘲讽权威。他们冲动行事，鄙视传统，不愿墨守成规。在他们眼中，法律就是要被钻空子甚至被打破。但多数叛逆浪人并非意图散播混乱的犯罪分子或无政府主义者，他们通过迷惑他人来寻找乐趣。这类人往往是复杂的，他们冷漠而迷人，有着自己独特的道德准则。', '核心属性': ['敏捷', '外貌'], '奖励点数': 100, 
        '奖励技能': ['估价', '技艺', '取悦', '乔装', '话术', '法律', '锁匠', '精神分析', '读唇', '侦查', '潜行'], '建议职业': ['艺术家', '银行劫匪', '窃贼', '欺诈师', '业余艺术爱好者', '艺人', '赌徒', '司机', '间谍', '学生'], '天赋': '', '建议特质': ['迷人', '使人安心', '固执己见', '狡猾', '精明', '富于心计']
    },
    '学者': {
        'name': '学者', '描述': '他们利用情报和分析了解周围的世界。学者们通常更喜欢坐在图书馆里，而不是去面对现实生活。作为知识的探求者，学者并不以行动为导向，不过，在紧要关头，学者们可能是唯一只要要怎么做的人。', '核心属性': ['教育'], '奖励点数': 100, 
        '奖励技能': ['会计', '人类学', '密码学', '历史', '语言', '图书馆使用', '医学', '博物学', '神秘学', '科学'], '建议职业': ['考古学家', '作家', '医生', '图书馆管理员', '超心理学家', '教授', '科学家'], '天赋': '', '建议特质': ['好学', '书卷气', '自傲', '高人一等', '孤僻', '挑剔', '讲话很快', '忧郁 特殊：必须以神话非信者开始游戏', '详见规则书理智章节']
    },
    '解谜人': {
        'name': '解谜人', '描述': '谜题和暗语吸引着解谜人，他们依靠智慧和推理揭开谜团，解决麻烦。他们乐于寻找并享受脑力上的挑战，无论他们会面对怎样的后果和苦难，他们都会一直专注于寻找真相。', '核心属性': ['智力'], '奖励点数': 100, 
        '奖励技能': ['会计', '估价', '乔装', '历史', '法律', '图书馆使用', '聆听', '神秘学', '精神分析', '科学', '侦查', '潜行'], '建议职业': ['事务所侦探', '作家', '警探', '联邦探员', '调查记者', '神秘学家', '超心理学家', '警探', '通讯记者', '间谍', '学生'], '天赋': '', '建议特质': ['敢于冒险', '只注意眼前', '狡诈', '自负', '被驱使']
    },
    '协助者': {
        'name': '协助者', '描述': '协助者拥有殉道者、叛逆浪人和刺激寻者的部分特质。通常，他们是还没有充分发掘自身潜力的年轻人，是寻求向导师学习的人，是站在聚光灯之外的人。又或者，协助者渴望成为英雄，可他们的能力却被同伴或导师所掩盖。协助者们有时会受困于内心的枷锁，他们充满想象但不切实际想法常常会给他们带来麻烦。这类人往往拥有强烈的道德准则和责任感。', '核心属性': ['敏捷', '体质'], '奖励点数': 100, 
        '奖励技能': ['驯兽', '取悦', '电气维修', '话术', '急救', '跳跃', '图书馆使用', '聆听', '导航', '摄影', '科学', '潜行', '追踪'], '建议职业': ['作家', '酒保/服务生', '警探', '管家', '私人司机', '医生', '联邦探员', '司机', '飞贼', '游民', '性工作者', '工人', '图书馆管理员', '护士', '摄影师', '科学家', '秘书', '混混', '学生', '部落成员'], '天赋': '', '建议特质': ['乐于助人', '机智', '忠诚', '容易惹事', '多疑', '好奇', '勇敢']
    },
    '殉道者': {
        'name': '殉道者', '描述': '殉道者的体内激荡着正义之血。这类人保护弱者，将他人利益至于自己之前，愿意为了他人的安全牺牲自己。无论他们接受精神或是宗教的指引，还是遵循着某种内在的道德准则，他们都不会沉沦于别处的深渊，他们为荣耀而战，为身边的人树立榜样。无论他们想要守护什么，他们同样也为正义而战！', '核心属性': ['体质'], '奖励点数': 100, 
        '奖励技能': ['会计', '汽车驾驶', '格斗:斗殴', '射击:手枪', '格斗', '射击', '急救', '历史', '恐吓', '法律', '博物学', '导航', '说服', '精神分析', '骑术', '侦查', '生存'], '建议职业': ['运动员', '警探', '管家', '神职人员', '私人司机', '医生', '政府官员', '驱魔师', '联邦探员', '绅士/淑女', '传教士', '护士', '警探', '私家侦探', '通讯记者', '海员', '士兵', '部落成员'], '天赋': '', '建议特质': ['坚定', '忠诚', '坚决', '信守承诺', '奉献精神', '严格而公正', '可靠']
    },
    '侠客': {
        'name': '侠客', '描述': '他们有着充满激情和理想主义的灵魂，总能救身陷险境的少女于水火之中。侠客们英勇无畏，以行动为导向，倡导公平决斗，蔑视用枪的懦夫。即使在危难关头，也能保持乐观、自负和聒噪。侠客有着浪漫的心和强烈的荣誉准则，但他们鲁莽的行为可能会危及所有人的生命。', '核心属性': ['敏捷', '外貌'], '奖励点数': 100, 
        '奖励技能': ['技艺', '取悦', '取悦','格斗:斗殴', '格斗', '跳跃', '语言', '机械维修', '导航', '操纵', '潜行', '游泳', '投掷'], 
        '建议职业': ['演员', '艺术家', '特技飞行员', '猎人', '业余艺术爱好者', '艺人', '绅士/淑女', '调查记者', '军官', '传教士', '私家侦探', '旅行家', '海员', '士兵', '间谍'], '天赋': '', '建议特质': ['自负', '英勇', '行动优先', '浪漫', '热情', '敏感']
    },
    '刺激寻者': {
        'name': '刺激寻者', '描述': '一些人的人生有如飞蛾扑火。对这类人来说，安逸的生活简直算不得活着，他们从冒险和刺激中感受人生。对于刺激寻者而言，风险永远都不够高，他们随时准备面对更大的刺激来感受肾上腺素喷涌的感觉。这些悍不畏死的家伙乐于投入到极限运动当中，对他们来说，高山皆是挑战。他们总是无法理解为何没有人敢于像他们一样面对风险。', '核心属性': ['敏捷', '意志'], '奖励点数': 100, '奖励技能': ['技艺', '取悦', '取悦', '潜水', '汽车驾驶', '话术', '跳跃', '机械维修', '导航', '操纵', '骑术', '潜行', '生存', '游泳', '投掷'], '建议职业': ['演员', '运动员', '特技飞行员', '银行劫匪', '猎人', '窃贼', '业余艺术爱好者', '艺人', '探险家', '赌徒', '黑帮', '司机', '飞贼', '绅士/淑女', '性工作者', '调查记者', '传教士', '音乐家', '神秘学家', '超心理学家', '旅行家', '海员', '士兵', '间谍', '工会活动家', '狂热者'], '天赋': '', '建议特质': ['冒失', '敢于冒险', '狂躁', '爱出风头', '喜欢自夸', '容易制造麻烦']
    },
    '硬汉': { 'name': '硬汉', '描述': '“活得潇洒，死的自在”是硬汉的座右铭，他们总是能量爆棚，强壮，坚韧而富有才华。这类人倾向于用使用拳头而不是言语来解决问题，他们热爱在酒后畅所欲言，做事直截了当，反感仪式和礼节，向来讨厌与白痴共处。硬汉的生活匆忙而易怒，他们蔑视权威，但对于那些肮脏的招数，他们也会加倍奉陪。', '核心属性': ['力量', '体型'], '奖励点数': 100, '奖励技能': ['汽车驾驶', '格斗:斗殴', '射击:手枪', '格斗', '射击', '恐吓', '聆听', '机械维修', '侦查', '游泳', '投掷'], '建议职业': ['事务所侦探', '银行劫匪', '警探', '拳击手', '黑帮', '飞贼', '打手', '刺客', '性工作者', '工人', '技师', '护士', '警探', '旅行家', '通讯记者', '海员', '士兵', '混混', '部落成员', '工会活动家'], '天赋': '', '建议特质': ['坚韧', '能干', '坚定', '易怒', '暴力', '邋遢', '腐败', "阴险 '"] }
}

export const hero_skill_default: { [key: string]: any }  = {
    "明察秋毫": "进行侦查检定时获得一个奖励骰。", 
    "快速愈合": "自然回复增加至每日3HP。", 
    "昏暗视觉": "降低夜间侦查检定的难度等级，忽略在夜间射击时的惩罚骰。", 
    "耐力卓绝": "进行体质检定时获得一个奖励骰，包括建立追逐时。", 
    "天生神力": "进行力量检定时获得一个奖励骰，比如用来举起某人某物。", 
    "千杯不醉": "可以花费5点幸运来避免过度饮酒带来的效果（无视技能惩罚）。", 
    "强健体魄": "可以花费10点幸运使疾病和毒药的伤害和效果减半。", 
    "铁骨铮铮": "可以花费10点幸运来吸收在一轮中收到的5点伤害。", 
    "耳听八方": "进行聆听检定时获得一个奖励骰。", 
    "魅力四射": "进行取悦检定时获得一个奖励骰。", 

    "坚定不移": "无视攻击人类、目睹惨烈创伤或尸体的理智损失。 ",
    "百折不挠": "可以花费幸运来避免等量的理智损失。 ",
    "钢铁意志": "进行意志检定时获得一个奖励骰。 ",
    "一目十行": "阅读书籍和神话典籍时，略读和精读花费的时间减半。 ",
    "语言学家": "可以了解遇到的是哪种语言或文字；进行语言检定时获得一个奖励骰。 ",
    "魔法亲和": "学习法术花费的时间减半；进行施法检定时获得一个奖励骰。 ",
    "过目不忘": "能够记住事件的诸多细节；进行知识(教育)检定时获得一个奖励骰。 ",
    "博学多才": "获得学问技能的一个专攻项，如梦境学问、吸血鬼学问、狼人学问；需要向该技能分配职业或兴趣点数。 ",
    "灵能觉醒": "获得一项灵能，遥视、占卜、灵媒、心灵感应、念动其中之一，需要向该技能分配职业或兴趣点数。 ",
    "足智多谋": "能够迅速整理线索；进行智力（不是灵感）检定时获得一个奖励骰。 ",

    "处变不惊": "不会被突袭。",
    "专注打击": "在格斗中，可以花费10点幸运来获得额外伤害骰，数量取决于所用武器。如徒手攻击+1D3，刀剑+1D6。 ",
    "快速装填": "选择一种武器，忽略使用该武器在同一回合装填并击发产生的惩罚骰。 ",
    "身手敏捷": "应对枪械而寻找掩护时，不会失去攻击机会。 ",
    "目光如炬": "忽略瞄准体型较小目标(体格-2)时产生的惩罚骰；忽略瞄准近战中的目标时产生的惩罚骰。 ",
    "技巧卓绝": "使用战技时，角色的体格视为+1。 ",
    "疾风连击": "在格斗中，可以花费10点幸运再进行一次攻击。 ",
    "动如脱兔": "在一整场战斗中，可以花费10点幸运来避免寡不敌众。 ",
    "快速拔枪": "决定回合轮次时，即使未准备好进行射击，亦视为获得+50DEX。 ",
    "手枪专精": "忽略手枪连射带来的惩罚骰。 ",

    "凶神恶煞": "进行恐吓检定时降低一级难度等级，或者获得一个奖励骰，由守秘人判断。 ",
    "奇妙道具": "游戏开始时获得一个奇妙道具，见怪奇技术 ",
    "吉人天相": "回复幸运时，额外投一个1D10。 ",
    "神话知识": "游戏开始时获得10点克苏鲁神话技能。 ",
    "怪奇技术": "可以制造和修理怪奇技术制品，见怪奇技术 ",
    "遁入暗影": "进行潜行检定时降低一级难度等级，或者获得一个奖励骰，由守秘人判断。如果目标未能察觉，在暴露之前可以进行两次突袭。 ",
    "能工巧匠": "进行操作重型机械、机械维修和电气维修检定时降低一级难度等级，或者获得一个奖励骰，由守秘人判断。 ",
    "动物朋友": "游戏开始时获得一只可靠的动物伙伴，比如猫、狗、鹦鹉；进行驯兽检定时获得一个奖励骰。 ",
    "伪装大师": "进行乔装或技艺(表演)检定时，可以花费10点幸运来获得一个奖励骰；可以使用腹语，让声音听起来是别处发出的；如果有人试图看穿伪装，其侦查或心理学检定提升为困难难度。",
    "早有准备": "需要的东西似乎总在手边；可以花费10点幸运（而非幸运检定）在附近找到有用的道具，如手电筒、够长的绳索、武器等。",
}

export const hero_skill_options: { [key: string]: any } = {
    "肉体天赋": ["明察秋毫","快速愈合","昏暗视觉","耐力卓绝","天生神力","千杯不醉","强健体魄","铁骨铮铮","耳听八方","魅力四射"],
    "精神天赋": ["坚定不移","百折不挠","钢铁意志","一目十行","语言学家","魔法亲和","过目不忘","博学多才","灵能觉醒","足智多谋"],
    "战斗天赋": ["处变不惊","专注打击","快速装填","身手敏捷","目光如炬","技巧卓绝","疾风连击","动如脱兔","快速拔枪","手枪专精"],
    "其他天赋": ["凶神恶煞","奇妙道具","吉人天相","神话知识","怪奇技术","遁入暗影","能工巧匠","动物朋友","伪装大师","早有准备"]
}

const chatgpt_text = `
小查，我需要你帮忙给我结构化数据，要求是我给你一串问题，你输出生字典的形式，例如我输入
"作家(原作向):
二选一(博物学,神秘学)
、
技艺(文学)、历史、外语(任一)、母语(任一)、心理学、图书馆使用、其他个人或时代特长(任一)"
，你需要给我返回

"作家(原作向)":{"describe":"二选一(博物学,神秘学)、技艺(文学)、历史、外语(任一)、母语(任一)、心理学、图书馆使用、其他个人或时代特长(任一)", "skill":[{"number": 1, "area": "list", "list": [{"name":"博物学"},{"name":"神秘学"}]}, {"name": "技艺", "sub_name": "文学"}, {"name": "历史"}, {"name": "外语"},{"name": "母语"},{"name": "心理学"},{"name": "图书馆使用"}, {"number": 1, "area": "all"},{"name": "信用评级"}]}

注意其中对于几选一、什么（什么）、任选一的写法都不一样，像外语(任一)、母语(任一)这种的括号内是任几的无需写sub_name字段，但是技艺(文学)或技艺:文学这样的需要name为技艺，sub_name为文学，二选一(博物学,神秘学)这样的写成{"number": 1, "area": "list", "list": [{"name":"博物学"},{"name":"神秘学"}]}，注意可能有几个选二或者选三的可能，这时修改number字段为对应的数字。不管输入如何，输入的里面一定要有{"name": "信用评级"}这个


作家(原作向)：二选一(博物学,神秘学)、技艺(文学)、历史、外语(任一)、母语(任一)、心理学、图书馆使用、其他个人或时代特长(任一)
编辑：四选二(取悦,话术,恐吓,说服)、会计、历史、母语(任一)、心理学、侦查、其他个人或时代特长(任一)
设计师：二选一(计算机使用,图书馆使用)、会计、技艺(摄影)、技艺(任一)、机械维修、心理学、侦查、其他个人或时代特长(任一)
音乐家：四选一(取悦,话术,恐吓,说服)、技艺(音乐)、聆听、心理学、其他个人或时代特长(任四)
电影演员：四选二(取悦,话术,恐吓,说服)、技艺(任一)、乔装、汽车驾驶、心理学、其他个人或时代特长(任二)
戏剧演员：四选二(取悦,话术,恐吓,说服)、技艺(任一)、乔装、格斗(任一)、历史、心理学、其他个人或时代特长(任一)
替身演员：二选一(电气维修,机械维修)、四选一(潜水,汽车驾驶,驾驶:任一,骑术)、攀爬、闪避、格斗(任一)、急救、跳跃、游泳
杂技演员：攀爬、闪避、投掷、跳跃、侦查、游泳、其他个人或时代特长(任二)
摄影师：四选一(取悦,话术,恐吓,说服)、技艺(摄影)、心理学、科学(化学)、潜行、侦查、其他个人或时代特长(任二)
摄影记者：四选一(取悦,话术,恐吓,说服)、技艺(摄影)、攀爬、外语(任一)、心理学、科学(化学)、其他个人或时代特长(任二)
艺人：四选二(取悦,话术,恐吓,说服)、技艺(表演类，如表演、演唱、喜剧等)、乔装、聆听、心理学、其他个人或时代特长(任二)
业余艺术爱好者(原作向)：四选一(取悦,话术,恐吓,说服)、技艺(任一)、射击(任一)、外语(任一)、骑术、其他个人或时代特长(任三)

工程师:技艺(技术制图)、电气维修、图书馆使用、机械维修、操作重型机械、科学(工程学)、科学(物理)、其他个人或时代特长(任一)
建筑师:二选一(计算机使用,图书馆使用)、会计、技艺(任一)、法律、母语(任一)、说服、心理学、科学(数学)
伐木工:三选一(博物学,科学:生物学,科学:植物学)、攀爬、闪避、格斗(链锯)、急救、跳跃、机械维修、投掷
工匠:会计、技艺(任二)、机械维修、博物学、侦查、其他个人或时代特长(任二)
技工:技艺(木工、焊接、管道工等)、攀爬、汽车驾驶、电气维修、机械维修、操作重型机械、其他个人或时代特长(任二)
矿工:攀爬、科学(地质学)、跳跃、机械维修、操作重型机械、潜行、侦查、其他个人或时代特长(任一)
农民:二选一(汽车驾驶,驾驶:马车)、四选一(取悦,话术,恐吓,说服)、技艺(耕作)、机械维修、博物学、操作重型机械、追踪、其他个人或时代特长(任一)
渔民:四选一(取悦,话术,恐吓,说服)、急救、机械维修、博物学、导航、驾驶(船)、侦查、游泳
猎人:二选一(聆听,侦查)、二选一(外语:任一,生存:任一)、射击(任一)、博物学、导航、科学(动物学)、潜行、追踪
牛仔:二选一(格斗:任一,射击:任一)、二选一(急救,博物学)、闪避、跳跃、骑术、生存(任一)、投掷、追踪
书商:四选一(取悦,话术,恐吓,说服)、会计、估价、汽车驾驶、历史、图书馆使用、母语(任一)、外语(任一)
古董商:四选二(取悦,话术,恐吓,说服)、会计、估价、汽车驾驶、历史、图书馆使用、导航
店老板:四选二(取悦,话术,恐吓,说服)、会计、电气维修、聆听、机械维修、心理学、侦查

帮我结构化数据，我将输入文本例如：
【徒手格斗】格斗:斗殴
使用
伤害：1D3+DB
次数：1
非贯穿
射程：接触
装弹量：N/A
故障率：N/A
年代：1920s，现代
价格：N/A

你需要给我提取其中的武器名称、技能类型、伤害、次数、贯穿、射程、装弹量、故障率，如：
"徒手格斗":{
    "技能": "格斗:斗殴",
    "伤害": "1D3+DB",
    "次数": 1,
    "贯穿": false,
    "射程": "接触",
    "装弹量": -1,
    "故障率": -1
}


注意其中装弹量、故障率如果不是N/A则返回对应的数字，否则是-1，贯穿根据文本判断返回true或者false





`
 

