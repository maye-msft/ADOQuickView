

"use strict";





function getDate(hours) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const timeStamp = new Date(currentYear, currentMonth, currentDay, 0, 0, 0).getTime();
    return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
}

function getDate2(dateString) {
    const sdate = dateString.substr(0, 10).split("-")
    return new Date(sdate[0], sdate[1] - 1, sdate[2]).getTime();
}

function getDate3(dateString) {
    const sdate = dateString.substr(0, 10).split("-")
    return new Date(sdate[0], sdate[1] - 1, 1).getTime();
}

let tasks = [
    {
        id: 1,
        label: 'Make some noise',
        user:
            '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
        start: getDate(-24 * 5),

        type: 'project'
        //collapsed: true,
    },
    {
        id: 2,
        label: 'With great power comes great responsibility',
        user:
            '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
        parentId: 1,
        start: getDate(-24 * 4),
        duration: 4 * 24 * 60 * 60 * 1000,
        progress: 50,
        type: 'milestone',
        collapsed: true,
        style: {
            base: {
                fill: '#1EBC61',
                stroke: '#0EAC51'
            }
            /*'tree-row-bar': {
              fill: '#1EBC61',
              stroke: '#0EAC51'
            },
            'tree-row-bar-polygon': {
              stroke: '#0EAC51'
            }*/
        }
    },
    {
        id: 3,
        label: 'Courage is being scared to death, but saddling up anyway.',
        user:
            '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
        parentId: 2,
        start: getDate(-24 * 3),
        duration: 2 * 24 * 60 * 60 * 1000,
        progress: 100,
        type: 'task'
    },
    {
        id: 4,
        label: 'Put that toy AWAY!',
        user:
            '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
        start: getDate(-24 * 2),
        duration: 2 * 24 * 60 * 60 * 1000,
        progress: 50,
        type: 'task',
        // dependentOn: [3]
    },

];
var testtasksd = [
    {
        "id": 75380,
        "name": "Schlumberger Industries",
        "label": "Schlumberger Industries",
        "type": "project",

        user: ''
    },
    {
        "id": 207686,
        "name": "OpenDES (DELFI) – Forum Demo/Proofpoint (Across Domain Data Workflows) ",
        "label": "OpenDES (DELFI) – Forum Demo/Proofpoint (Across Domain Data Workflows) ",
        "type": "project",
        "parentId": 75380,
        "collapsed": false,
        "start": 1564588800000,
        "duration": 172800000,
        user: ''
    },
    {
        "id": 243838,
        "name": "OpenDES - Sprint 2",
        "label": "OpenDES - Sprint 2",
        "type": "milestone",
        "parentId": 207686,
        "collapsed": false,
        "start": 1564588800000,
        "duration": 172800000,
        user: ''
    },
    {
        "id": 247618,
        "name": "Participant - OpenDES - Sprint 2",
        "label": "Participant - OpenDES - Sprint 2",
        "type": "task",
        "children": [],
        "start": 1564588800000,
        "duration": 172800000,
        "progress": 100,
        "parentId": 243838,
        "collapsed": false,
        user: ''
    },
]

let options = {
    // maxRows: 100,
    maxHeight: 320,
    title: {
        label: 'Your project title as html (link or whatever...)',
        html: false
    },
    row: {
        height: 9
    },
    calendar: {
        hour: {
            display: false
        }
    },
    chart: {
        progress: {
            bar: false
        },
        expander: {
            display: true
        }
    },
    taskList: {
        expander: {
            straight: false
        },
        columns: [
            {
                id: 1,
                label: 'ID',
                value: 'idlabel',
                width: 70,
                html: true
            },
            {
                id: 2,
                label: 'Description',
                value: 'label',
                width: 200,
                expander: true,
                html: true,
                events: {
                    // click({ data, column }) {
                    //     alert('description clicked!\n' + data.label);
                    // }
                }
            },
            {
                id: 3,
                label: 'Assigned To',
                value: 'assignedTo',
                width: 100,
                expander: true,
                html: true,
                events: {
                    // click({ data, column }) {
                    //     alert('description clicked!\n' + data.label);
                    // }
                }
            },


            // {
            //     id: 3,
            //     label: 'Assigned to',
            //     value: 'user',
            //     width: 130,
            //     html: true
            // },
            {
                id: 4,
                label: 'Start',
                value: task => dayjs(task.start).format('YYYY-MM-DD'),
                width: 78
            },
            {
                id: 5,
                label: 'End',
                value: task => dayjs(task.start + task.duration).format('YYYY-MM-DD'),
                width: 78
            },
            {
                id: 6,
                label: 'Status',
                value: 'status',
                width: 60
            }
            // {
            //     id: 4,
            //     label: 'Type',
            //     value: 'type',
            //     width: 68
            // },
            // {
            //     id: 5,
            //     label: '%',
            //     value: 'progress',
            //     width: 35,
            //     style: {
            //         'task-list-header-label': {
            //             'text-align': 'center',
            //             width: '100%'
            //         },
            //         'task-list-item-value-container': {
            //             'text-align': 'center',
            //             width: '100%'
            //         }
            //     }
            // }
        ]
    }
    /*locale:{
      name: 'pl', // name String
      weekdays: 'Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota_Niedziela'.split('_'), // weekdays Array
      weekdaysShort: 'Pon_Wto_Śro_Czw_Pią_Sob_Nie'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
      weekdaysMin: 'Pn_Wt_Śr_Cz_Pt_So_Ni'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
      months: 'Styczeń_Luty_Marzec_Kwiecień_Maj_Czerwiec_Lipiec_Sierpień_Wrzesień_Październik_Listopad_Grudzień'.split('_'), // months Array
      monthsShort: 'Sty_Lut_Mar_Kwi_Maj_Cze_Lip_Sie_Wrz_Paź_Lis_Gru'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
      ordinal: n => `${n}`, // ordinal Function (number) => return number + output
      relativeTime: { // relative time format strings, keep %s %d as the same
        future: 'za %s', // e.g. in 2 hours, %s been replaced with 2hours
        past: '%s temu',
        s: 'kilka sekund',
        m: 'minutę',
        mm: '%d minut',
        h: 'godzinę',
        hh: '%d godzin', // e.g. 2 hours, %d been replaced with 2
        d: 'dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: '%d miesięcy',
        y: 'rok',
        yy: '%d lat'
      }
   }*/
};








// enhance the original "$.ajax" with a retry mechanism 
$.ajax = (($oldAjax) => {
    // on fail, retry by creating a new Ajax deferred
    function check(a, b, c) {
        var shouldRetry = b != 'success' && b != 'parsererror';
        if (shouldRetry && --this.retries > 0)
            setTimeout(() => { $.ajax(this) }, this.retryInterval || 100);
    }

    return settings => $oldAjax(settings).always(check)
})($.ajax);

var store = new Vuex.Store({
    state: {
        entities: [],
        categories: [],
        categoryrules: []
    },
    mutations: {
        addEntity(state, entity) {
            state.entities.push({ name: entity, keywords: "" })
        },
        removeEntity(state, index) {
            state.entities.splice(index, 1)
        },

        importEntities(state, entities) {
            state.entities = entities
        },

        addCategory(state, category) {
            state.categories.push({ name: category, rules: [] })
        },
        removeCategory(state, index) {
            state.categories.splice(index, 1)

        },
        addCategoryRule(state, param) {
            var cateIndex = param[0]
            var rule = param[1]
            state.categories[cateIndex].rules.push({
                name: rule,
                primaryobjects: [],
                secondaryobjects: [],
            })

        },
        removeCategoryRule(state, param) {
            var cateIndex = param[0]
            var index = param[1]
            state.categories[cateIndex].rules.splice(index, 1)

        },
        importCategories(state, categories) {
            state.categories = categories
        },
    }
});
var routes = [

]
var router = new VueRouter({
    routes: routes
})

var vm = new Vue({
    el: '#app',
    router: router,
    store: store,
    components: {
        'gantt-header': { template: `<span>Gantt Chart</span>` }, // or Header,
        'gantt-elastic': GanttElastic,
        'gantt-footer': {
            template: `<span>this is a footer</span>`
        }
    },




    data: {
        drawer: null,
        fromDate: new Date().toISOString().substr(0, 10),
        fromDate2: new Date().toISOString().substr(0, 10),
        toDate: new Date().toISOString().substr(0, 10),
        toDate2: new Date().toISOString().substr(0, 10),
        menu1: false,
        menu2: false,
        industryitems: ['Automotive', 'Education', 'Financial Services', 'Government', 'Health', 'Manufacturing & Resources',
            'Media & Communications', 'Other Commercial Industries'],
        industry: ['Manufacturing & Resources'],

        tab: null,
        tab2: null,
        tabitems: [
            'Gantt', 'Category'
        ],
        loading: false,
        objects: {},
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        progressvalue: 0,
        progresscount: 0,
        treeitems: [],
        engagements: [],
        activeworkitem: [],
        tasks: tasks.map(task => Object.assign({}, task)),
        options,
        dynamicStyle: {
            'task-list-header-label': {
                'font-weight': 'bold'
            }
        },
        destroy: false,
        categoryinfo: {},
        // headers: [
        //   {
        //     text: 'Dessert (100g serving)',
        //     align: 'left',
        //     sortable: false,
        //     value: 'name',
        //   },
        //   { text: 'Calories', value: 'calories' },
        //   { text: 'Fat (g)', value: 'fat' },
        //   { text: 'Carbs (g)', value: 'carbs' },
        //   { text: 'Protein (g)', value: 'protein' },
        //   { text: 'Iron (%)', value: 'iron' },
        // ],
        // desserts: [
        //   {
        //     name: 'Frozen Yogurt',
        //     calories: 159,
        //     fat: 6.0,
        //     carbs: 24,
        //     protein: 4.0,
        //     iron: '1%',
        //   },
        //   {
        //     name: 'Ice cream sandwich',
        //     calories: 237,
        //     fat: 9.0,
        //     carbs: 37,
        //     protein: 4.3,
        //     iron: '1%',
        //   },
        //   {
        //     name: 'Eclair',
        //     calories: 262,
        //     fat: 16.0,
        //     carbs: 23,
        //     protein: 6.0,
        //     iron: '7%',
        //   },
        //   {
        //     name: 'Cupcake',
        //     calories: 305,
        //     fat: 3.7,
        //     carbs: 67,
        //     protein: 4.3,
        //     iron: '8%',
        //   },
        //   {
        //     name: 'Gingerbread',
        //     calories: 356,
        //     fat: 16.0,
        //     carbs: 49,
        //     protein: 3.9,
        //     iron: '16%',
        //   },
        //   {
        //     name: 'Jelly bean',
        //     calories: 375,
        //     fat: 0.0,
        //     carbs: 94,
        //     protein: 0.0,
        //     iron: '0%',
        //   },
        //   {
        //     name: 'Lollipop',
        //     calories: 392,
        //     fat: 0.2,
        //     carbs: 98,
        //     protein: 0,
        //     iron: '2%',
        //   },
        //   {
        //     name: 'Honeycomb',
        //     calories: 408,
        //     fat: 3.2,
        //     carbs: 87,
        //     protein: 6.5,
        //     iron: '45%',
        //   },
        //   {
        //     name: 'Donut',
        //     calories: 452,
        //     fat: 25.0,
        //     carbs: 51,
        //     protein: 4.9,
        //     iron: '22%',
        //   },
        //   {
        //     name: 'KitKat',
        //     calories: 518,
        //     fat: 26.0,
        //     carbs: 65,
        //     protein: 7,
        //     iron: '6%',
        //   },
        // ],
    },
    computed: {
        ...Vuex.mapState([
            'entities', 'categories'
        ]),
        objectlength() {
            return Object.keys(this.objects).length
        },
        selectedworkitem() {
            if (!this.activeworkitem.length) return undefined
            console.log(this.activeworkitem[0]);

            return this.activeworkitem[0]
        },
        selectedobj() {
            return this.selectedworkitem ? this.objects[this.selectedworkitem].value.fields : {}
        },
        headers() {
            return [
                {
                    text: 'ID',
                    align: 'left',
                    sortable: true,
                    value: 'id',
                },
                {
                    text: 'Organization',
                    align: 'center',
                    sortable: true,
                    value: 'organization',
                },
                {
                    text: 'Title',
                    align: 'left',
                    sortable: false,
                    value: 'title',
                },
                {
                    text: 'Category',
                    align: 'left',
                    sortable: true,
                    value: 'category',
                },
                {
                    text: 'Status',
                    align: 'left',
                    sortable: true,
                    value: 'status',
                },
                {
                    text: 'Assigned To',
                    align: 'left',
                    sortable: false,
                    value: 'assignedto',
                },
                
            ]
        },
        
    },
    methods: {
        ...Vuex.mapMutations([
            'importEntities', 'importCategories',
        ]),
        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${month}/${day}/${year}`
        },
        parseDate(date) {
            if (!date) return null

            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        calctreeitems() {
            var keys = Object.keys(this.objects)
            var items = [];
            var that = this
            keys.forEach(key => {
                var obj = that.objects[key].value

                if (obj && obj.fields["System.WorkItemType"] == "Organization") {
                    var org = { id: parseInt(key), name: obj.fields["System.Title"], label: obj.fields["System.Title"], type: "project", children: [] };
                    if (obj.fields["CSEngineering-V2-Orgs.AccountOwner"]) {
                        org.assignedTo = `<a href="https://csefy19.visualstudio.com/Organizations/_workitems/edit/${key}" target="_blank" >${obj.fields["CSEngineering-V2-Orgs.AccountOwner"]["displayName"]}</a>`

                    }

                    org.label = `<a href="https://csefy19.visualstudio.com/Organizations/_workitems/edit/${key}" target="_blank" >${org.label}</a>`


                    var status = obj.fields["CSEngineering-V2.OverallStatus"]
                    org.status = status
                    if (status.indexOf('Yellow') != -1) {
                        org.style = {
                            base: {
                                fill: 'orange',
                                stroke: 'orange'
                            }
                        }
                    } else if (status.indexOf('Green') != -1) {

                        org.style = {
                            base: {
                                fill: 'green',
                                stroke: 'green'
                            }
                        }

                    } else if (status.indexOf('Black') != -1) {

                        org.style = {
                            base: {
                                fill: 'black',
                                stroke: 'black'
                            }
                        }

                    } else if (status.indexOf('Gray') != -1) {

                        org.style = {
                            base: {
                                fill: 'gray',
                                stroke: 'gray'
                            }
                        }

                    }

                    that.findchildren(org)
                    if (org.children.length > 0) {
                        items.push(org)
                    }
                    org.idlabel = `<a href="https://csefy19.visualstudio.com/Organizations/_workitems/edit/${key}" target="_blank" style="color:#0077c0;">${org.id}</a>`


                    //console.log(JSON.stringify(obj, null ,2));

                }


            })
            return items
        },
        findchildren(parentobj) {
            let that = this
            that.objects[parentobj.id].children.forEach(child => {
                if (that.objects[child]) {
                    var subobj = that.objects[child].value
                    var childobj = { id: parseInt(child), name: subobj.fields["System.Title"], label: subobj.fields["System.Title"], type: "project", children: [] };
                    if (subobj.fields["System.AssignedTo"])
                        childobj.assignedTo = subobj.fields["System.AssignedTo"]["displayName"]
                    that.findchildren(childobj)
                    parentobj.children.push(childobj);

                    //gantt settings
                    if (subobj.fields["System.WorkItemType"] == "Participant") {
                        childobj.start = getDate2(subobj.fields["CSEngineering-V2.ParticipationStartDate"])
                        childobj.duration = subobj.fields["CSEngineering-V2.ActivityDuration"] * 24 * 60 * 60 * 1000
                        childobj.progress = 100


                    }

                    if (subobj.fields["System.WorkItemType"] == "Engagement") {
                        that.engagements.push(
                            {
                                id: parseInt(child),
                                title: subobj.fields["System.Title"],
                                assignedto: subobj.fields["System.AssignedTo"]?subobj.fields["System.AssignedTo"]["displayName"]:'-',
                                description: that.strip(subobj.fields["System.Description"]),
                                status:subobj.fields["CSEngineering-V2.OverallStatus"],
                                organization:parentobj.name,
                            }
                        )
                    }

                    childobj.label = `<a href="https://csefy19.visualstudio.com/Organizations/_workitems/edit/${childobj.id}" target="_blank" style="color:#0077c0;">${childobj.label}</a>`
                    childobj.idlabel = `<a href="https://csefy19.visualstudio.com/Organizations/_workitems/edit/${childobj.id}" target="_blank" style="color:#0077c0;">${childobj.id}</a>`


                    var status = subobj.fields["CSEngineering-V2.OverallStatus"]
                    childobj.status = status
                    if (status) {
                        if (status.indexOf('Yellow') != -1) {
                            childobj.style = {
                                base: {
                                    fill: 'orange',
                                    stroke: 'orange'
                                }
                            }
                        } else if (status.indexOf('Green') != -1) {

                            childobj.style = {
                                base: {
                                    fill: 'green',
                                    stroke: 'green'
                                }
                            }

                        } else if (status.indexOf('Black') != -1) {

                            childobj.style = {
                                base: {
                                    fill: 'black',
                                    stroke: 'black'
                                }
                            }

                        } else if (status.indexOf('Gray') != -1) {

                            childobj.style = {
                                base: {
                                    fill: 'gray',
                                    stroke: 'gray'
                                }
                            }

                        }
                    } else {
                        childobj.style = {
                            base: {
                                fill: '#1EBC61',
                                stroke: '#0EAC51'
                            }
                        }
                    }

                    parentobj.start = Math.min(parentobj.start || childobj.start, childobj.start)
                    parentobj.duration = Math.max((parentobj.start) + (parentobj.duration || 0), childobj.start + childobj.duration) - parentobj.start

                    childobj.parentId = parseInt(parentobj.id)
                    childobj.collapsed = true


                }
            })

        },
        // loadworkitem(id) {
        //     var that = this;
        //     $.ajax({
        //         type: "POST",
        //         url: '/loadworkitem',
        //         data: JSON.stringify({ id: id }),
        //         dataType: 'json',
        //         contentType: "application/json; charset=utf-8",
        //         // timeout       : 5000,
        //         // retries       : 3,     //       <-------- Optional
        //         // retryInterval : 1000,  //       <-------- Optional
        //         success: function (result) {
        //             that.objects[id].value = result;
        //             that.progresscount++;
        //             that.progressvalue = Math.round(that.progresscount / that.objectlength * 100)
        //             //console.log(that.objects[id]);
        //             if (that.progresscount == that.objectlength) {
        //                 that.treeitems = that.calctreeitems()
        //             }
        //         },
        //         error: function (xhr, ajaxOptions, thrownError) {

        //         }
        //     });
        // },
        strip(html) {

            html = html || '';

            return html.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, '').trim();

        },
        loadworkitems(ids) {
            var that = this;
            $.ajax({
                type: "POST",
                url: '/loadworkitems',
                data: JSON.stringify({ ids: ids }),
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                // timeout       : 5000,
                // retries       : 3,     //       <-------- Optional
                // retryInterval : 1000,  //       <-------- Optional
                success: function (result) {
                    that.loading = false
                    ids.forEach(id => {
                        result.forEach(res => {
                            if (res.id == id)
                                that.objects[id].value = res;
                        })

                    })

                    that.progresscount += ids.length;
                    that.progressvalue = Math.round(that.progresscount / that.objectlength * 100)
                    //console.log(that.objects[id]);
                    if (that.progresscount == that.objectlength) {
                        var treeitems = that.calctreeitems()
                        that.treeitems = treeitems


                        that.tasks = that.buildTasks(treeitems).map(task => Object.assign({}, task))
                        that.categoryinfo = that.engagement2Category()
                    
                        // console.log(JSON.stringify(that.tasks, null, 4));

                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    that.loading = false
                }
            });
        },

        buildTasks(treeitems, tasks) {
            var that = this;
            tasks = tasks || []
            treeitems.forEach(item => {
                tasks.push(item);
                if (item.children) {
                    item.children.forEach(child => {
                        tasks.push(child);
                        that.buildTasks(child.children, tasks)
                    })
                }
            })
            return tasks;
        },

        queryworkitems() {
            this.loading = true

            this.progressvalue = 0;
            this.progresscount = 0;
            this.treeitems = [];
            this.engagements = [];
            this.objects = {};
            var that = this;
            $.ajax({
                type: "POST",
                url: '/queryworkitem',
                data: JSON.stringify({ industry: that.industry[0], startDay: that.fromDate, endDay: that.toDate }),
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (result) {

                    that.objects = result;
                    let keys = Object.keys(that.objects)
                    let count = 0;
                    for (let i = 0; i < keys.length; i += 100) {
                        let ids = keys.slice(i, Math.min(keys.length, i + 100))
                        that.loadworkitems(ids)
                    }

                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert("Error occurred, Please try again.")
                    that.loading = false
                }
            });
        },
        buildObjectsFromLocal() {

            if (window["result_objects"]) {
                this.objects = window["result_objects"];
                var that = this
                window["result_items"].forEach(res => {
                    that.objects[res.id].value = res;
                })

                this.treeitems = this.calctreeitems()
                this.tasks = this.buildTasks(this.treeitems).map(task => Object.assign({}, task))
                this.categoryinfo = this.engagement2Category()

            }
        },
        fuseSearch(word, list) {
            var options = {
                threshold: 0.2,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: [
                    "title",
                    "description"
                ],
                id: 'id'
            };
            var fuse = new Fuse(list, options); // "list" is the item array
            return fuse.search(word);
        },
        engagememt2Keywords() {
            var that = this;
            var entity2engagements = {}
            this.entities.forEach((entity) => {
                var keywords = entity.keywords.split("\n")
                keywords.forEach((keyword) => {
                    var engagements = that.fuseSearch(keyword, that.engagements)
                    engagements.forEach(eng => {
                        entity2engagements[eng] = entity2engagements[eng] || []
                        if (entity2engagements[eng].indexOf(entity.name) == -1) {
                            entity2engagements[eng].push(entity.name)
                        }
                    })
                })
            })
            //console.log(entity2engagements);

            return entity2engagements;
        },
        engagement2Category() {
            var that = this;
            var entity2engagements = this.engagememt2Keywords()
            var categoriesData = {}
            Object.keys(entity2engagements).forEach(function (engagement, idx) {
                var categoryRow = [];
                that.categories.forEach(function (category) {

                    category.rules.forEach(function (rule) {
                        var primaryMatched = false;
                        if (rule.primaryobjects.length > 0) {
                            for (var j = 0; j < entity2engagements[engagement].length; j++) {
                                for (var k = 0; k < rule.primaryobjects.length; k++) {
                                    if (rule.primaryobjects[k].name == entity2engagements[engagement][j]) {
                                        primaryMatched = true
                                        break;
                                    }
                                }

                            }
                        }

                        if (primaryMatched && rule.secondaryobjects.length > 0) {
                            entity2engagements[engagement].forEach(function (ent) {
                                for (var k = 0; k < rule.secondaryobjects.length; k++) {
                                    if (rule.secondaryobjects[k].name == ent) {
                                        if (categoryRow.indexOf(category.name) == -1)
                                            categoryRow.push(category.name)
                                        break;
                                    }
                                }

                            })
                        } else if (primaryMatched) {
                            if (categoryRow.indexOf(category.name) == -1)
                                categoryRow.push(category.name)
                        }
                    })
                })

                categoriesData[engagement] = (categoryRow)
            })

            that.engagements.forEach((eng)=>{
                eng.category = categoriesData[eng.id].join(",")
            })

            //console.log(categoriesData);
            return categoriesData;
        }



    },

    watch: {
        fromDate2(val) {
            this.fromDate = this.formatDate(this.fromDate2)
        },
        toDate2(val) {
            this.toDate = this.formatDate(this.toDate2)
        },
    },
    mounted: function () {
        this.fromDate = this.formatDate(this.fromDate2)
        this.toDate = this.formatDate(this.toDate2)

        if (window["scenarios"] && window["scenarios"].entities) {
            this.importEntities(window["scenarios"].entities)
        }

        if (window["scenarios"] && window["scenarios"].categories) {
            this.importCategories(window["scenarios"].categories)
        }
        this.buildObjectsFromLocal()

    }
})


Vue.component("entity-view", {
    template: '#entity-template',
    store: store,
    data: function () {
        return {

        }
    },
    methods: {
        ...Vuex.mapMutations([
            'addEntity', 'removeEntity',
        ]),
    },
    computed: {
        ...Vuex.mapState([
            'entities'
        ]),
    },
    mounted: function () {



    }
});

Vue.component("category-view", {
    template: '#category-template',
    store: store,
    data: function () {
        return {

        }
    },
    methods: {
        ...Vuex.mapMutations([
            'addCategory', 'removeCategory',
            'addCategoryRule', 'removeCategoryRule'
        ]),
    },
    computed: {
        ...Vuex.mapState([
            'entities', 'categories'
        ]),
    },
    mounted() {



    }
});

Vue.component("scenarios-view", {
    template: '#scenarios-template',
    store: store,
    data: function () {
        return {
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%',
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%',
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%',
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%',
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%',
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%',
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%',
                },
                {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%',
                },
                {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%',
                },
            ],
        }
    },
    methods: {
        ...Vuex.mapMutations([
            'addCategory', 'removeCategory',
            'addCategoryRule', 'removeCategoryRule'
        ]),
    },
    computed: {
        ...Vuex.mapState([
            'entities', 'categories'
        ]),
    },
    mounted() {



    }
});

// gantt state which will be updated in realtime
let ganttState, ganttInstance;


// // listen to 'gantt-elastic.ready' or 'gantt-elastic.mounted' event
// // to get the gantt state for real time modification
// app.$on('gantt-elastic-ready', ganttElasticInstance => {
//     ganttInstance = ganttElasticInstance;

//     ganttInstance.$on('tasks-changed', tasks => {
//         app.tasks = tasks;
//     });
//     ganttInstance.$on('options-changed', options => {
//         app.options = options;
//     });
//     ganttInstance.$on('dynamic-style-changed', style => {
//         app.dynamicStyle = style;
//     });

//     ganttInstance.$on('chart-task-mouseenter', ({ data, event }) => {
//         console.log('task mouse enter', { data, event });
//     });
//     ganttInstance.$on('updated', () => {
//         //console.log('gantt view was updated');
//     });
//     ganttInstance.$on('destroyed', () => {
//         //console.log('gantt was destroyed');
//     });
//     ganttInstance.$on('times-timeZoom-updated', () => {
//         console.log('time zoom changed');
//     });
//     ganttInstance.$on('taskList-task-click', ({ event, data, column }) => {
//         console.log('task list clicked! (task)', { data, column });
//     });
// });