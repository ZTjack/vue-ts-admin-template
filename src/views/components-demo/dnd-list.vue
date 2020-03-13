<!--
 * @Author: Jack
 * @Date: 2020-01-10 15:40:37
 * @LastEditors  : Jack
 * @LastEditTime : 2020-01-13 17:42:09
 * @Description:
 -->
<template>
  <div class="components-container">
    <aside>
      drag-list base on
      <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank"
        >Vue.Draggable</a
      >
    </aside>
    <div class="editor-container">
      <dnd-list
        :list1="list1"
        :list2="list2"
        list1-title="List"
        list2-title="Article pool"
      />
    </div>
  </div>
</template>

<script>
import DndList from '@/components/DndList'

export default {
  name: 'DndListDemo',
  components: { DndList },
  data() {
    return {
      list1: [],
      list2: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.listLoading = true
      const items = [
        {
          id: 101,
          timestamp: 1424241288721,
          author: 'Richard',
          reviewer: 'Karen',
          title: 'Qsqfpltri Jmjj Ojf Uyaklmwikg Nojjf',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 60.75,
          importance: 2,
          type: 'CN',
          status: 'draft',
          display_time: '2004-04-19 19:56:20',
          comment_disabled: true,
          pageviews: 2426,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 102,
          timestamp: 92613411535,
          author: 'John',
          reviewer: 'George',
          title: 'Umdsplohi Ffi Mwdhpyf Ihpwskb Zxwppfzwk Wqciym',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 96.38,
          importance: 1,
          type: 'EU',
          status: 'published',
          display_time: '1988-04-01 22:02:07',
          comment_disabled: true,
          pageviews: 3239,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 103,
          timestamp: 1302778204139,
          author: 'Gary',
          reviewer: 'Edward',
          title:
            'Vlhbzcvppf Nozmk Ytiksnh Beymv Raqrgmf Swouqyh Drparg Zohrvqy Grojkzg',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 26.77,
          importance: 2,
          type: 'JP',
          status: 'draft',
          display_time: '1973-08-15 11:28:12',
          comment_disabled: true,
          pageviews: 1290,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 104,
          timestamp: 1325230399202,
          author: 'Laura',
          reviewer: 'Cynthia',
          title:
            'Giq Wlfpf Qrrpeibkxh Fhb Koscwbdbe Dnyn Slieyh Nttlrwmoql Gvdryt',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 26.74,
          importance: 2,
          type: 'US',
          status: 'draft',
          display_time: '2007-10-20 12:20:29',
          comment_disabled: true,
          pageviews: 461,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 105,
          timestamp: 1537337459454,
          author: 'Brenda',
          reviewer: 'Dorothy',
          title: 'Wszqlpotq Qmmsuncf Ifdrjbe Kmknpf Kbs Clux Rujxm',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 61.68,
          importance: 1,
          type: 'US',
          status: 'published',
          display_time: '1991-03-25 04:43:27',
          comment_disabled: true,
          pageviews: 562,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 106,
          timestamp: 32630688508,
          author: 'Jessica',
          reviewer: 'Gary',
          title: 'Fvmj Tqnleg Wmgckytzt Qgcidxvl Pwfjcxo Wyvdo Ylavrsehs',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 55.16,
          importance: 1,
          type: 'JP',
          status: 'draft',
          display_time: '1975-09-13 20:43:01',
          comment_disabled: true,
          pageviews: 4884,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 107,
          timestamp: 734173942153,
          author: 'Amy',
          reviewer: 'Brenda',
          title: 'Evxgecrel Ldhb Xhbyzpy Bvbqovt Rqogg Ytcfneen Llz Bttu',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 84.47,
          importance: 2,
          type: 'EU',
          status: 'draft',
          display_time: '2007-01-10 20:56:40',
          comment_disabled: true,
          pageviews: 1489,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 108,
          timestamp: 772873065480,
          author: 'Gary',
          reviewer: 'Larry',
          title:
            'Zcwhoe Kixnpmdc Cjk Jmrfjcrtb Rkmq Itliawstai Gqx Rfuqdnkdbw Rtqte',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 6.59,
          importance: 2,
          type: 'JP',
          status: 'draft',
          display_time: '2016-08-19 15:16:41',
          comment_disabled: true,
          pageviews: 3241,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 109,
          timestamp: 688792285218,
          author: 'Scott',
          reviewer: 'Elizabeth',
          title:
            'Vdfktfipcw Vndbqbp Jeh Vkhtybqrje Vlrlnppaqy Jsbsyg Ngofgbuyr Xjdgqdg Qgiwf',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 77.34,
          importance: 3,
          type: 'JP',
          status: 'draft',
          display_time: '2013-08-20 04:41:20',
          comment_disabled: true,
          pageviews: 2238,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 110,
          timestamp: 1162004586759,
          author: 'Michael',
          reviewer: 'Paul',
          title:
            'Ehmaody Iufx Bwkxby Lqv Bmsf Kqyw Ngvpbuybq Kvxzo Rlkyu Ugohsck',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 95.77,
          importance: 2,
          type: 'US',
          status: 'deleted',
          display_time: '2005-11-16 05:31:19',
          comment_disabled: true,
          pageviews: 871,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 111,
          timestamp: 1233529479561,
          author: 'Jeffrey',
          reviewer: 'Jose',
          title: 'Sultaqxf Wiyb Dihemhvn Fdzrye Cweiynj Jzjadvfg Gqouvnkhn',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 18.15,
          importance: 1,
          type: 'US',
          status: 'deleted',
          display_time: '1982-12-25 18:01:09',
          comment_disabled: true,
          pageviews: 612,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 112,
          timestamp: 27670887331,
          author: 'Amy',
          reviewer: 'Kevin',
          title: 'Nmzvixjrl Dqdhg Msnwcit Kxogqmzt Xalit',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 79.43,
          importance: 2,
          type: 'EU',
          status: 'draft',
          display_time: '1973-06-15 08:57:31',
          comment_disabled: true,
          pageviews: 3283,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 113,
          timestamp: 359166751566,
          author: 'Gary',
          reviewer: 'Daniel',
          title: 'Afdhtapo Bstp Vyg Wixovpvndo Lyjj',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 71.83,
          importance: 2,
          type: 'JP',
          status: 'published',
          display_time: '2006-05-13 05:49:45',
          comment_disabled: true,
          pageviews: 1194,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 114,
          timestamp: 781131282903,
          author: 'David',
          reviewer: 'Michael',
          title:
            'Kzoyfbsbjr Vneo Bjte Cejsqm Espfnmfsv Pvydpql Wxoolkijr Mofyop Ewfwp',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 39.27,
          importance: 2,
          type: 'JP',
          status: 'draft',
          display_time: '1995-08-08 11:22:38',
          comment_disabled: true,
          pageviews: 4780,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 115,
          timestamp: 141238445961,
          author: 'Joseph',
          reviewer: 'Donna',
          title:
            'Mdbkisx Ckfumof Xjrccpmjl Jpthnrajz Jtuclpyvr Goskgti Vtdvon Amphk',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 47.36,
          importance: 3,
          type: 'JP',
          status: 'draft',
          display_time: '2005-05-08 13:29:50',
          comment_disabled: true,
          pageviews: 723,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 116,
          timestamp: 527119932528,
          author: 'Jeffrey',
          reviewer: 'Jennifer',
          title:
            'Zpwhwe Bdrvxyjxw Elwbqfi Ccyww Otqmoybg Skzukl Etxpfp Jqftwh Vhjt',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 98.72,
          importance: 1,
          type: 'US',
          status: 'published',
          display_time: '2017-05-30 14:05:46',
          comment_disabled: true,
          pageviews: 2312,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        },
        {
          id: 117,
          timestamp: 568662387718,
          author: 'Barbara',
          reviewer: 'Michael',
          title:
            'Dhgumgpclo Ulmgowg Xlhvfgqnf Gdxljtttlq Tlvbgfr Jyfg Ghhbvcu Lbwldl Fputefiaas',
          content_short: 'mock data',
          content:
            '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
          forecast: 8.89,
          importance: 3,
          type: 'JP',
          status: 'deleted',
          display_time: '2004-05-25 12:19:35',
          comment_disabled: true,
          pageviews: 1184,
          image_uri:
            'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
          platforms: ['a-platform']
        }
      ]
      this.list1 = items.splice(0, 5)
      this.list2 = items
    }
  }
}
</script>
