
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
    }
]

export const skill_default: { [key: string]: any }  = {
    "克苏鲁神话": {name: "克苏鲁神话", default: 0, levelup: false, sub:false},
    "信用评级": {name: "信用评级", default: 0, levelup: true, sub:false},
    "侦查": {name: "侦查", default: 25, levelup: true, sub:false},
    "聆听": {name: "聆听", default: 20, levelup: true, sub:false},
    "图书馆使用": {name: "图书馆使用", default: 20, levelup: true, sub:false},
    "计算机使用": {name: "计算机使用", default: 5, levelup: true, sub:false},
    "潜行": {name: "潜行", default: 20, levelup: true, sub:false},
    "追踪": {name: "追踪", default: 10, levelup: true, sub:false},
    "导航": {name: "导航", default: 10, levelup: true, sub:false},
    "话术": {name: "话术", default: 5, levelup: true, sub:false},
    "说服": {name: "说服", default: 10, levelup: true, sub:false},
    "取悦": {name: "取悦", default: 15, levelup: true, sub:false},
    "恐吓": {name: "恐吓", default: 15, levelup: true, sub:false},
    "心理学": {name: "心理学", default: 10, levelup: true, sub:false},
    "母语": {name: "母语", default: "EDU", levelup: true, sub:true, sub_name:[]},
    "外语": {name: "外语", default: 1, levelup: true, sub:true, sub_name:[]},
    "闪避": {name: "闪避", default: "DEX/2", levelup: true, sub:false},
    "格斗:斗殴": {name: "格斗:斗殴", default: 25, levelup: true, sub:false},
    "格斗": {name: "格斗", default: 0, levelup: true, sub:true, sub_name: []},
    "射击:手枪": {name: "射击:手枪", default: 20, levelup: true, sub:false},
    "射击:步/霰": {name: "射击:步/霰", default: 25, levelup: true, sub:false},
    "射击": {name: "射击", default: 0, levelup: true, sub:true, sub_name:[]},
    "投掷": {name: "投掷", default: 20, levelup: true, sub:false},
    "急救": {name: "急救", default: 30, levelup: true, sub:false},
    "医学": {name: "医学", default: 1, levelup: true, sub:false},
    "精神分析": {name: "精神分析", default: 1, levelup: true, sub:false},
    "攀爬": {name: "攀爬", default: 20, levelup: true, sub:false},
    "跳跃": {name: "跳跃", default: 20, levelup: true, sub:false},
    "游泳": {name: "游泳", default: 20, levelup: true, sub:false},
    "博物学": {name: "博物学", default: 10, levelup: true, sub:false},
    "神秘学": {name: "神秘学", default: 5, levelup: true, sub:false},
    "考古学": {name: "考古学", default: 1, levelup: true, sub:false},
    "人类学": {name: "人类学", default: 1, levelup: true, sub:false},
    "估价": {name: "估价", default: 5, levelup: true, sub:false},
    "会计": {name: "会计", default: 5, levelup: true, sub:false},
    "法律": {name: "法律", default: 5, levelup: true, sub:false},
    "历史": {name: "历史", default: 5, levelup: true, sub:false},
    "电子学": {name: "电子学", default: 1, levelup: true, sub:false},
    "科学": {name: "科学", default: 1, levelup: true, sub:true, sub_name:[]},
    "汽车驾驶": {name: "汽车驾驶", default: 20, levelup: true, sub:false},
    "骑术": {name: "骑术", default: 5, levelup: true, sub:false},
    "驾驶": {name: "驾驶", default: 1, levelup: true, sub:true, sub_name:[]},
    "操作重型机械": {name: "操作重型机械", default: 1, levelup: true, sub:false},
    "乔装": {name: "乔装", default: 5, levelup: true, sub:false},
    "妙手": {name: "妙手", default: 10, levelup: true, sub:false},
    "锁匠": {name: "锁匠", default: 1, levelup: true, sub:false},
    "机械维修": {name: "机械维修", default: 10, levelup: true, sub:false},
    "电气维修": {name: "电气维修", default: 10, levelup: true, sub:false},
    "驯兽": {name: "驯兽", default: 5, levelup: true, sub:false},
    "技艺": {name: "技艺", default: 5, levelup: true, sub:true, sub_name:[]},
    "生存": {name: "生存", default: 5, levelup: true, sub:true, sub_name:[]},   
    "其他": {name: "其他", default: 0, levelup: true, sub:false},   
}

export const skill_option = [
    {   
        name: "本职",
        sub: []
    },
    {   
        name: "探索",
        sub: [ "侦查", "聆听","图书馆使用","计算机使用","追踪","导航","潜行"]
    },
    {   
        name: "社交",
        sub: ["话术","说服", "取悦", "恐吓","心理学", "母语", "外语","外语","外语"]
    },
    {   
        name: "战斗",
        sub: ["闪避", "格斗:斗殴", "格斗","格斗","射击:手枪", "射击:步/霰", "射击", "射击", "投掷"]
    },
    {   
        name: "医学",
        sub: ["急救","医学", "精神分析"]
    },
    {   
        name: "运动",
        sub: ["攀爬", "跳跃","游泳"]
    },
    {   
        name: "知识",
        sub: ["博物学","神秘学", "考古学", "人类学", "估价","会计","法律","历史","电子学", "科学", "科学", "科学"]
    },
    {   
        name: "操纵",
        sub: ["汽车驾驶","骑术","驾驶","驾驶","操作重型机械"]
    },
    {   
        name: "技艺",
        sub: ["乔装","妙手", "锁匠", "机械维修","电气维修","驯兽","技艺","技艺","技艺","生存","生存","生存"]
    },
    {   
        name: "其他",
        sub: ["信用评级", "克苏鲁神话"]
    },
]

export const work_default: { [key: string]: any } = {
    "作家(原作向)": {
        "信用评级": [9, 30],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "二选一(博物学,神秘学)、技艺(文学)、历史、外语(任一)、母语(任一)、心理学、图书馆使用、其他个人或时代特长(任一)",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "博物学"}, {"name": "神秘学"}]},
            {"name": "技艺", "sub_name": "文学"},
            {"name": "历史"},
            {"name": "外语"},
            {"name": "母语"},
            {"name": "心理学"},
            {"name": "图书馆使用"},
            {"number": 1, "area": "all"},
            {"name": "信用评级"}
        ]
    },

    "编辑": {
        "信用评级": [10, 30],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "四选二(取悦,话术,恐吓,说服)、会计、历史、母语(任一)、心理学、侦查、其他个人或时代特长(任一)",
        "skill": [
            {"number": 2, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "会计"},
            {"name": "历史"},
            {"name": "母语"},
            {"name": "心理学"},
            {"name": "侦查"},
            {"number": 1, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "设计师": {
        "信用评级": [20, 60],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "二选一(计算机使用,图书馆使用)、会计、技艺(摄影)、技艺(任一)、机械维修、心理学、侦查、其他个人或时代特长(任一)",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "计算机使用"}, {"name": "图书馆使用"}]},
            {"name": "会计"},
            {"name": "技艺", "sub_name": "摄影"},
            {"name": "技艺"},
            {"name": "机械维修"},
            {"name": "心理学"},
            {"name": "侦查"},
            {"number": 1, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "音乐家": {
        "信用评级": [9, 30],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["敏捷", "意志"]}],
        "describe": "四选一(取悦,话术,恐吓,说服)、技艺(音乐)、聆听、心理学、其他个人或时代特长(任四)",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "技艺", "sub_name": "音乐"},
            {"name": "聆听"},
            {"name": "心理学"},
            {"number": 4, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "电影演员": {
        "信用评级": [20, 90],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["外貌"]}],
        "describe": "四选二(取悦,话术,恐吓,说服)、技艺(任一)、乔装、汽车驾驶、心理学、其他个人或时代特长(任二)",
        "skill": [
            {"number": 2, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "技艺"},
            {"name": "乔装"},
            {"name": "汽车驾驶"},
            {"name": "心理学"},
            {"number": 2, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "戏剧演员": {
        "信用评级": [9, 40],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["外貌"]}],
        "describe": "四选二(取悦,话术,恐吓,说服)、技艺(任一)、乔装、格斗(任一)、历史、心理学、其他个人或时代特长(任一)",
        "skill": [
            {"number": 2, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "技艺"},
            {"name": "乔装"},
            {"name": "格斗"},
            {"name": "历史"},
            {"name": "心理学"},
            {"number": 1, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "替身演员": {
        "信用评级": [10, 50],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["力量", "敏捷"]}],
        "describe": "二选一(电气维修,机械维修)、四选一(潜水,汽车驾驶,驾驶:任一,骑术)、攀爬、闪避、格斗(任一)、急救、跳跃、游泳",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "电气维修"}, {"name": "机械维修"}]},
            {"number": 1, "area": "list", "list": [{"name": "潜水"}, {"name": "汽车驾驶"}, {"name": "驾驶"}, {"name": "骑术"}]},
            {"name": "攀爬"},
            {"name": "闪避"},
            {"name": "格斗"},
            {"name": "急救"},
            {"name": "跳跃"},
            {"name": "游泳"},
            {"name": "信用评级"}
        ]
    },
    "杂技演员": {
        "信用评级": [9, 20],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": [ "敏捷"]}],
        "describe": "攀爬、闪避、投掷、跳跃、侦查、游泳、其他个人或时代特长(任二)",
        "skill": [
            {"name": "攀爬"},
            {"name": "闪避"},
            {"name": "投掷"},
            {"name": "跳跃"},
            {"name": "侦查"},
            {"name": "游泳"},
            {"number": 2, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "摄影师": {
        "信用评级": [9, 30],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "四选一(取悦,话术,恐吓,说服)、技艺(摄影)、心理学、科学(化学)、潜行、侦查、其他个人或时代特长(任二)",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "技艺", "sub_name": "摄影"},
            {"name": "心理学"},
            {"name": "科学", "sub_name": "化学"},
            {"name": "潜行"},
            {"name": "侦查"},
            {"number": 2, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "摄影记者": {
        "信用评级": [10, 40],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "四选一(取悦,话术,恐吓,说服)、技艺(摄影)、攀爬、外语(任一)、心理学、科学(化学)、其他个人或时代特长(任二)",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "技艺", "sub_name": "摄影"},
            {"name": "攀爬"},
            {"name": "外语"},
            {"name": "心理学"},
            {"name": "科学", "sub_name": "化学"},
            {"number": 2, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "艺人": {
        "信用评级": [9, 70],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["外貌"]}],
        "describe": "四选二(取悦,话术,恐吓,说服)、技艺(表演类，如表演、演唱、喜剧等)、乔装、聆听、心理学、其他个人或时代特长(任二)",
        "skill": [
            {"number": 2, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "技艺"},
            {"name": "乔装"},
            {"name": "聆听"},
            {"name": "心理学"},
            {"number": 2, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "业余艺术爱好者(原作向)": {
        "信用评级": [50, 99],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["外貌"]}],
        "describe": "四选一(取悦,话术,恐吓,说服)、技艺(任一)、射击(任一)、外语(任一)、骑术、其他个人或时代特长(任三)",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "技艺"},
            {"name": "射击"},
            {"name": "外语"},
            {"name": "骑术"},
            {"number": 3, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "工程师": {
        "信用评级": [30, 60],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "技艺(技术制图)、电气维修、图书馆使用、机械维修、操作重型机械、科学(工程学)、科学(物理)、其他个人或时代特长(任一)",
        "skill": [
            {"name": "技艺", "sub_name": "技术制图"},
            {"name": "电气维修"},
            {"name": "图书馆使用"},
            {"name": "机械维修"},
            {"name": "操作重型机械"},
            {"name": "科学", "sub_name": "工程学"},
            {"name": "科学", "sub_name": "物理"},
            {"number": 1, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "建筑师": {
        "信用评级": [30, 70],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "二选一(计算机使用,图书馆使用)、会计、技艺(任一)、法律、母语(任一)、说服、心理学、科学(数学)",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "计算机使用"}, {"name": "图书馆使用"}]},
            {"name": "会计"},
            {"name": "技艺"},
            {"name": "法律"},
            {"name": "母语"},
            {"name": "说服"},
            {"name": "心理学"},
            {"name": "科学", "sub_name": "数学"},
            {"name": "信用评级"}
        ]
    },
    "伐木工": {
        "信用评级": [9, 30],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["力量", "敏捷"]}],
        "describe": "三选一(博物学,科学:生物学,科学:植物学)、攀爬、闪避、格斗(链锯)、急救、跳跃、机械维修、投掷",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "博物学"}, {"name": "科学", "sub_name": "生物学"}, {"name": "科学", "sub_name": "植物学"}]},
            {"name": "攀爬"},
            {"name": "闪避"},
            {"name": "格斗", "sub_name": "链锯"},
            {"name": "急救"},
            {"name": "跳跃"},
            {"name": "机械维修"},
            {"name": "投掷"},
            {"name": "信用评级"}
        ]
    },
    "工匠": {
        "信用评级": [10, 40],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["敏捷"]}],
        "describe": "会计、技艺(任二)、机械维修、博物学、侦查、其他个人或时代特长(任二)",
        "skill": [
            {"name": "会计"},
            {"name": "技艺"},
            {"name": "技艺"},
            {"name": "机械维修"},
            {"name": "博物学"},
            {"name": "侦查"},
            {"number": 2, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "技工": {
        "信用评级": [9, 40],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "技艺(木工、焊接、管道工等)、攀爬、汽车驾驶、电气维修、机械维修、操作重型机械、其他个人或时代特长(任二)",
        "skill": [
            {"name": "技艺"},
            {"name": "攀爬"},
            {"name": "汽车驾驶"},
            {"name": "电气维修"},
            {"name": "机械维修"},
            {"name": "操作重型机械"},
            {"number": 2, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "矿工": {
        "信用评级": [9, 30],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["敏捷", "力量"]}],
        "describe": "攀爬、科学(地质学)、跳跃、机械维修、操作重型机械、潜行、侦查、其他个人或时代特长(任一)",
        "skill": [
            {"name": "攀爬"},
            {"name": "科学", "sub_name": "地质学"},
            {"name": "跳跃"},
            {"name": "机械维修"},
            {"name": "操作重型机械"},
            {"name": "潜行"},
            {"name": "侦查"},
            {"number": 1, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "农民": {
        "信用评级": [9, 30],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["敏捷", "力量"]}],
        "describe": "二选一(汽车驾驶,驾驶:马车)、四选一(取悦,话术,恐吓,说服)、技艺(耕作)、机械维修、博物学、操作重型机械、追踪、其他个人或时代特长(任一)",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "汽车驾驶"}, {"name": "驾驶", "sub_name": "马车"}]},
            {"number": 1, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "技艺", "sub_name": "耕作"},
            {"name": "机械维修"},
            {"name": "博物学"},
            {"name": "操作重型机械"},
            {"name": "追踪"},
            {"number": 1, "area": "all"},
            {"name": "信用评级"}
        ]
    },
    "渔民": {
        "信用评级": [20, 40],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "四选一(取悦,话术,恐吓,说服)、急救、机械维修、博物学、导航、驾驶(船)、侦查、游泳",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "急救"},
            {"name": "机械维修"},
            {"name": "博物学"},
            {"name": "导航"},
            {"name": "驾驶", "sub_name": "船"},
            {"name": "侦查"},
            {"name": "游泳"},
            {"name": "信用评级"}
        ]
    },
    "猎人": {
        "信用评级": [20, 50],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "二选一(聆听,侦查)、二选一(外语:任一,生存:任一)、射击(任一)、博物学、导航、科学(动物学)、潜行、追踪",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "聆听"}, {"name": "侦查"}]},
            {"number": 1, "area": "list", "list": [{"name": "外语"}, {"name": "生存"}]},
            {"name": "射击"},
            {"name": "博物学"},
            {"name": "导航"},
            {"name": "科学", "sub_name": "动物学"},
            {"name": "潜行"},
            {"name": "追踪"},
            {"name": "信用评级"}
        ]
    },
    "牛仔": {
        "信用评级": [9, 20],
        "workPoints": [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["敏捷", "力量"]}],
        "describe": "二选一(格斗:任一,射击:任一)、二选一(急救,博物学)、闪避、跳跃、骑术、生存(任一)、投掷、追踪",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "格斗"}, {"name": "射击"}]},
            {"number": 1, "area": "list", "list": [{"name": "急救"}, {"name": "博物学"}]},
            {"name": "闪避"},
            {"name": "跳跃"},
            {"name": "骑术"},
            {"name": "生存"},
            {"name": "投掷"},
            {"name": "追踪"},
            {"name": "信用评级"}
        ]
    },
    "书商": {
        "信用评级": [20, 40],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "四选一(取悦,话术,恐吓,说服)、会计、估价、汽车驾驶、历史、图书馆使用、母语(任一)、外语(任一)",
        "skill": [
            {"number": 1, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "会计"},
            {"name": "估价"},
            {"name": "汽车驾驶"},
            {"name": "历史"},
            {"name": "图书馆使用"},
            {"name": "母语"},
            {"name": "外语"},
            {"name": "信用评级"}
        ]
    },
    "古董商": {
        "信用评级": [30, 50],
        "workPoints": [{"scale": 4, "att": ["教育"]}],
        "describe": "四选二(取悦,话术,恐吓,说服)、会计、估价、汽车驾驶、历史、图书馆使用、导航",
        "skill": [
            {"number": 2, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "会计"},
            {"name": "估价"},
            {"name": "汽车驾驶"},
            {"name": "历史"},
            {"name": "图书馆使用"},
            {"name": "导航"},
            {"name": "信用评级"}
        ]
    },
    "店老板": {
        "信用评级": [20, 40],
        "workPoints":  [{"scale": 2, "att": ["教育"]}, {"scale": 2, "att": ["敏捷", "力量"]}],
        "describe": "四选二(取悦,话术,恐吓,说服)、会计、电气维修、聆听、机械维修、心理学、侦查",
        "skill": [
            {"number": 2, "area": "list", "list": [{"name": "取悦"}, {"name": "话术"}, {"name": "恐吓"}, {"name": "说服"}]},
            {"name": "会计"},
            {"name": "电气维修"},
            {"name": "聆听"},
            {"name": "机械维修"},
            {"name": "心理学"},
            {"name": "侦查"},
            {"name": "信用评级"}
        ]
    }
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











`