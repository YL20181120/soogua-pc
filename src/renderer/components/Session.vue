<template>
  <div class='session'>
    <div class="message-box">
      <div class='item' v-for="item in items" :key="item.id">
        <div class='avatar'>
          <el-avatar :size="50" :src="item.avatar" shape="square">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
          </el-avatar>
        </div>
        <div class="message">
          <div class="nickname">
            <h5>{{ item.nickname }}</h5>
          </div>
          <div class="last-message">
            <p>{{ item.sign }}</p>
          </div>
          <div class="time">
            <span>{{ item.created_at }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Avatar } from 'element-ui'
  export default {
    name: 's-session',
    components: {
      [Avatar.name]: Avatar
    },
    data () {
      return {
        items: [
          {
            'id': '3000000522',
            'nickname': 'Chomreoun',
            'sign': 'សន្យាធ្វើអ្វីបើធ្វើមិនបាន😏',
            'created_at': '3/1/2020',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/FB_IMG_1576138147025.jpg'
          },
          {
            'id': '3000000514',
            'nickname': 'su tik',
            'sign': 'Hello everyone 😊',
            'created_at': '2/1/2020',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/FB_IMG_1567648561322.jpg'
          },
          {
            'id': '3000000504',
            'nickname': 'Theary Theary',
            'sign': 'ហេតុអ្វីបំភ្លេចសន្យា',
            'created_at': '2/1/2020',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/received_805025749943938.jpeg'
          },
          {
            'id': '3000000503',
            'nickname': 'AI sha',
            'sign': 'ពិភពលោកពិតជាទូលាយរហូតរកមនុស្សស្មោះមួយគ្នាន',
            'created_at': '2/1/2020',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/received_481369422513875.jpeg'
          },
          {
            'id': '3000000497',
            'nickname': 'prince',
            'sign': 'always happy',
            'created_at': '2/1/2020',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1577933038231127.jpg'
          },
          {
            'id': '3000000483',
            'nickname': 'FFB',
            'sign': '生而无生，灭而无灭。',
            'created_at': '31/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/mmexport1458478504992.jpg'
          },
          {
            'id': '3000000463',
            'nickname': 'shivam',
            'sign': 'om namah shivay jai bholenath',
            'created_at': '30/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/157767718021543.jpg'
          },
          {
            'id': '3000000453',
            'nickname': '随时随地约',
            'sign': '一次一万哦',
            'created_at': '29/12/2019',
            'avatar': 'http://oss-1.soogua.cn/8A1554B6-EEB1-4B69-8CB9-6057ED2DC1DC.jpg'
          },
          {
            'id': '3000000448',
            'nickname': 'Phea rothraksmey',
            'sign': 'Single',
            'created_at': '28/12/2019',
            'avatar': 'http://oss-1.soogua.cn/4DC25651-0CEA-48EA-9708-C324253D0D74.jpg'
          },
          {
            'id': '3000000423',
            'nickname': 'alexender phealan',
            'sign': 'am sometimes busy',
            'created_at': '26/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/FB_IMG_1576052792472.jpg'
          },
          {
            'id': '3000000417',
            'nickname': 'Meliton',
            'sign': 'Ready for you baby',
            'created_at': '26/12/2019',
            'avatar': 'http://oss-1.soogua.cn/1410C22B-70C8-475E-ABF2-262D2658DFC3.jpg'
          },
          {
            'id': '3000000415',
            'nickname': 'khan',
            'sign': 'khan',
            'created_at': '26/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1577544246160736.png'
          },
          {
            'id': '3000000413',
            'nickname': '李拜天',
            'sign': '要上天',
            'created_at': '26/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1577325696951285.jpg'
          },
          {
            'id': '3000000401',
            'nickname': 'Ankush',
            'sign': 'ankush',
            'created_at': '24/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1577162146154815.jpg'
          },
          {
            'id': '3000000378',
            'nickname': 'Shaico',
            'sign': 'wfm man',
            'created_at': '22/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1576960461516424.jpg'
          },
          {
            'id': '3000000365',
            'nickname': 'karen',
            'sign': 'karen',
            'created_at': '20/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1576844962401885.png'
          },
          {
            'id': '3000000294',
            'nickname': '王梦',
            'sign': '微信:wang527111867',
            'created_at': '17/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1576555966744193.jpg'
          },
          {
            'id': '3000000293',
            'nickname': 'Vanna Kh',
            'sign': 'The beautiful world',
            'created_at': '17/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1576562885580389.jpg'
          },
          {
            'id': '3000000288',
            'nickname': '37℃',
            'sign': '只管努力，剩下的交给运气！',
            'created_at': '16/12/2019',
            'avatar': 'http://oss-1.soogua.cn/4ABEEAEF-7668-4F66-B3D9-385D200DB8B6.jpg'
          },
          {
            'id': '3000000273',
            'nickname': 'Lin',
            'sign': 'just try to use',
            'created_at': '15/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1576347256936683.jpg'
          },
          {
            'id': '3000000264',
            'nickname': '王海龙',
            'sign': '抓到你了',
            'created_at': '14/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1576736247896306.jpg'
          },
          {
            'id': '3000000259',
            'nickname': '阿育他亚天朝之子',
            'sign': '来自天朝的阿瑜陀耶创业者',
            'created_at': '14/12/2019',
            'avatar': 'http://oss-1.soogua.cn/FC37D4D8-3084-442D-B49C-21F29D1CE2B2.jpg'
          },
          {
            'id': '3000000237',
            'nickname': 'Everythings',
            'sign': '我是男的，系统怎么显示女的呢',
            'created_at': '12/12/2019',
            'avatar': 'https://thirdwx.qlogo.cn/mmopen/vi_32/YexWyn5kwcHnqSwqhnFPxyxBkfG4PYmXnv2Afwoneb0ibjaJbaxqsqHtpJoaQClgVNV0ic1nZGegqSL5O6DgHKZA/132'
          },
          {
            'id': '3000000229',
            'nickname': 'DT Ri mon',
            'sign': 'বিসমিল্লাহির রহমানির রহিম',
            'created_at': '12/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/FB_IMG_1568709072022.jpg'
          },
          {
            'id': '3000000216',
            'nickname': 'Rimon Khan',
            'sign': 'English',
            'created_at': '12/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/FB_IMG_1568709072022.jpg'
          },
          {
            'id': '3000000211',
            'nickname': 'Paul Wilson',
            'sign': 'Gods plan',
            'created_at': '12/12/2019',
            'avatar': 'http://oss-1.soogua.cn/DF2D7A42-403F-4676-B533-9B51976C52AF.jpg'
          },
          {
            'id': '3000000202',
            'nickname': '上善若水*',
            'sign': '水利万物而不争',
            'created_at': '11/12/2019',
            'avatar': 'http://oss-1.soogua.cn/8B67E7D3-9046-4CC4-8478-DD3AEB0CFEFA.jpg'
          },
          {
            'id': '3000000192',
            'nickname': 'Aoangx',
            'sign': 'hello world.',
            'created_at': '10/12/2019',
            'avatar': 'http://oss-1.soogua.cn/6E0A5E91-1188-48E5-840E-C26BF8BC477D.jpg'
          },
          {
            'id': '3000000186',
            'nickname': '姗姗吖',
            'sign': '我酷我说什么都对',
            'created_at': '10/12/2019',
            'avatar': 'http://oss-1.soogua.cn/9ECDAE8D-4582-4B47-9FEB-E3922EF17072.jpg'
          },
          {
            'id': '3000000178',
            'nickname': '星晨',
            'sign': '我喜欢别人床上的女孩！听起来有点渣！换个说法，我喜欢的女孩上了别人的床！',
            'created_at': '9/12/2019',
            'avatar': 'http://oss-1.soogua.cn/D2D367D4-CC7C-44AC-B75D-B45A7DDFC511.jpg'
          },
          {
            'id': '3000000177',
            'nickname': '姚森',
            'sign': '年轻没有失败。',
            'created_at': '9/12/2019',
            'avatar': 'http://oss-1.soogua.cn/9B104C7D-4822-4465-A16A-77A0E8848E00.jpg'
          },
          {
            'id': '3000000156',
            'nickname': 'Yuan Ju',
            'sign': '喜欢出发，喜欢离开，喜欢一生中都能有新的梦想',
            'created_at': '6/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/FB_IMG_1575611696414.jpg'
          },
          {
            'id': '3000000154',
            'nickname': 'beautiful',
            'sign': '🙏🙏🙏🙏🙏🙏🙏🍎',
            'created_at': '6/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/199136_16c38_640.jpg'
          },
          {
            'id': '3000000149',
            'nickname': 'YIFEILIN',
            'sign': '卸载了。',
            'created_at': '6/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1575602570893614.jpg'
          },
          {
            'id': '3000000135',
            'nickname': '孙英龙',
            'sign': '比好人好、比坏人坏的好坏人！',
            'created_at': '3/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1576597439088519.jpg'
          },
          {
            'id': '3000000127',
            'nickname': '马越🦁 🦁🦁🦁🦁🦁🦁🦁🦁🦁🦁🦁',
            'sign': '📱⛹️‍♀️🏊‍♂️🛵🕝🇨🇳🍨✌️',
            'created_at': '2/12/2019',
            'avatar': 'http://oss-1.soogua.cn/DB741669-3626-47CE-A5A1-BA73F6857FDE.jpg'
          },
          {
            'id': '3000000123',
            'nickname': 'Lucy',
            'sign': '每天的太阳都是新的，每个愿望都是金的，每次的成功都是拼的！',
            'created_at': '1/12/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/157520351315892.jpg'
          },
          {
            'id': '3000000099',
            'nickname': '老良先生',
            'sign': '忠厚善良的老先生',
            'created_at': '28/11/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/mmexport1576141456847.jpg'
          },
          {
            'id': '3000000095',
            'nickname': '紫色夏梦',
            'sign': '我们是胖子，营养过剩的胖子，少吃点不会怎么样！',
            'created_at': '28/11/2019',
            'avatar': 'http://oss-1.soogua.cn/3FEAE8A6-8A72-46F1-87F5-595FFCE2459B.jpg'
          },
          {
            'id': '3000000094',
            'nickname': 'Pha Phi',
            'sign': '因为我看到了机会，所以我会思考自己可以为他们做些什么！',
            'created_at': '27/11/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/157493234594541.jpg'
          },
          {
            'id': '3000000091',
            'nickname': 'Grace',
            'sign': 'People who know you are the warmest.',
            'created_at': '23/11/2019',
            'avatar': 'http://oss-1.soogua.cn/586AB271-2837-49BD-B47B-F844722DF2B5.jpg'
          },
          {
            'id': '3000000089',
            'nickname': 'GANG',
            'sign': '我不是很懒！',
            'created_at': '23/11/2019',
            'avatar': 'http://oss-1.soogua.cn/304912C5-CA0E-4022-9466-6914D88B93D2.jpg'
          },
          {
            'id': '3000000077',
            'nickname': 'Jennifer💗',
            'sign': '黑的白的红的黄的紫的绿的蓝的灰的你的我的他的她的大的小的圆的扁的好的坏的美的丑的',
            'created_at': '21/11/2019',
            'avatar': 'http://oss-1.soogua.cn/2D98113B-1020-4585-BBC1-E14B80C79144.jpg'
          },
          {
            'id': '3000000072',
            'nickname': '『Rachel』',
            'sign': '细草微风岸 危樯独夜舟',
            'created_at': '15/11/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1577784481274494.jpg'
          },
          {
            'id': '3000000069',
            'nickname': '眼角的笑意',
            'sign': 'The greatest test of courage on earth is to bear defeat with',
            'created_at': '15/11/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/ChMkJ1fJQV6IRg4bAAUz0KhtnsUAAU7cgJrQCgABTPo637.jpg'
          },
          {
            'id': '3000000066',
            'nickname': '霉霉',
            'sign': '成事不足 败事有余',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/FEF46FCB-BDE5-4A7A-8E42-8CA387A5BB80.jpg'
          },
          {
            'id': '3000000062',
            'nickname': '阿白',
            'sign': '钱没了，生命还在，一切都可以重来，爱走了，还有下一场花开，',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/C8DFA431-68CF-41CC-A3D4-5DBF0AB26D16.jpg'
          },
          {
            'id': '3000000061',
            'nickname': '买买提大毛',
            'sign': '只有真正努力过的人才知道',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/541098F3-1050-4B57-AF0D-C14BB7E07CA8.jpg'
          },
          {
            'id': '3000000059',
            'nickname': 'Jobs@SooGua',
            'sign': 'Soogua open sexy girls come in',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/2BBBD20B-168E-4B1D-8BD9-872642279F3B.jpg'
          },
          {
            'id': '3000000058',
            'nickname': 'មេឃខៀវ璃如',
            'sign': 'Wani ប្រើពាក្យកុហកដើម្បីបញ្ឆោតសេចក្ដីស្រឡាញ់ Curcuma មិនស្អប់ភាពក្លាហានអ៊ើរឌី។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_50/51538270_149121489424150_4279848444182396928_n.jpg'
          },
          {
            'id': '3000000057',
            'nickname': 'មិនច្បាស់លាស់និងឆ្ងាយ',
            'sign': 'គ្មានបញ្ហាថាតើខ្ញុំបានក្លាយជារឹងមាំ, អ្នកនឹងនៅតែភាពទន់ខ្សោយរបស់ខ្ញុំ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_49/53737184_2283303941993862_3121837059732406272_o.jpg'
          },
          {
            'id': '3000000056',
            'nickname': 'ទឹកថ្នាំពន្លឺស៊ូជៀន',
            'sign': 'ប្រជាជននៅក្នុងមុខនៃសុភមង្គលស្រាប់តែនឹងក្លាយជាខ្មាស់អៀនក្នុងការចាប់យកសុភមង្គលពិតជាត្រូវការច្រើនជាងភាពក្លាហានដើម្បីស៊ូទ្រាំនឹងការឈឺចាប់។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_48/45311664_591443821284637_5150071215636873216_n.jpg'
          },
          {
            'id': '3000000055',
            'nickname': 'ក្រូចផ្អែម',
            'sign': 'សីតុណ្ហាភាព, អនុញ្ញាតឱ្យយើងផ្កាភ្លើង។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_47/69573799_116036369773433_8895471281172905984_n.jpg'
          },
          {
            'id': '3000000054',
            'nickname': 'នៅក្នុងករណីនៃផ្ការីក',
            'sign': 'លាក់ពុតគឺភាពរន្ធត់នៃបេះដូង, ការញញឹមគឺគ្រាន់តែជាការបញ្ចេញមតិមួយ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_46/41992063_305517823606686_6470681295885172736_n.jpg'
          },
          {
            'id': '3000000053',
            'nickname': 'ខ្ញុំស្រឡាញ់ក្តីសុបិន្ត',
            'sign': 'អស់ពីចិត្ដគឺកម្លាំងទន់ភ្លន់បំផុតរបស់ពិភពលោក។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_45/70510505_524415821638269_1380663386722795520_n.jpg'
          },
          {
            'id': '3000000052',
            'nickname': 'ផ្កា Tumi ╰ zu ច្រាំងヾ',
            'sign': 'ការបកស្រាយនៃការអស់សង្ឃឹមរបស់គាត់ដោយសំឡេងយ៉ាងខ្លាំង។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_44/67920758_2360033644266184_1363976944856596480_n.jpg'
          },
          {
            'id': '3000000051',
            'nickname': 'ពីផ្លូវ',
            'sign': 'ច្រើនទៀតដូចជាការធ្វេសប្រហែសដូចជាអ្នកចាស់មួយ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_43/58384225_565957497226040_374587982197293056_n.jpg'
          },
          {
            'id': '3000000050',
            'nickname': '╰មាត់សើចនៅសល់゛',
            'sign': 'តើមានមនុស្សម្នាក់, ដែលគាត់បានធ្វើឱ្យអ្នកភ្នែកក្រហម, ស្នាមញញឹមនៅតែអត់ទោសឱ្យអ្នក។ ',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_42/62206778_444451666355122_2143266814749048832_n.jpg'
          },
          {
            'id': '3000000049',
            'nickname': 'ខ្ញុំបាន sweltering',
            'sign': 'មោទនភាពអស្ចារ្យបំផុតរបស់ស្ត្រីមិនមែនជារបៀបដែលនាងមើលទៅលេចធ្លោតែបុរសនោះអំពីរបៀបដែលនាងបានធ្វើឱ្យនាងឈឺចាប់។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_41/13626445_140509443043173_8337328068047817389_n.jpg'
          },
          {
            'id': '3000000048',
            'nickname': 'ក្នុងក្តីសុបិន្តរបស់អ្នក',
            'sign': 'បាននិយាយថាភ្លេចមនុស្ស, ជាញឹកញាប់នៅតែចងចាំ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_40/46987301_367937817301679_7820647211313659904_n.jpg'
          },
          {
            'id': '3000000047',
            'nickname': 'ខ្ញុំបានយំចេញពីការគ្រប់',
            'sign': 'ចាប់តាំងពីមុនពេលអ្នកកើតខ្ញុំបានស្រឡាញ់អ្នករាល់គ្នាដែរ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_39/67929057_426007304678484_3023235339444551680_n.jpg'
          },
          {
            'id': '3000000046',
            'nickname': 'Crayonតូចជាទីស្រឡាញ់',
            'sign': 'វាគឺជារឹងរូសខ្លាំងណាស់ទៅលើ, immersed នៅក្នុងការចងចាំការស្លាប់យឺត។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_38/69945540_163008914848445_7847452901071912960_n.jpg'
          },
          {
            'id': '3000000045',
            'nickname': 'សមុទ្រខាងក្រោយ',
            'sign': 'ខ្ញុំឈប់ខ្ពស់ទម្រង់បំពេញសុភមង្គលឥតអៀនខ្មាស់របស់អ្នក។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_37/69202285_114537199919032_4900281617123115008_n.jpg'
          },
          {
            'id': '3000000044',
            'nickname': 'ហ៍មហាសន្និបាតប្រចាំ',
            'sign': 'ដៃកាន់ខាងឆ្វេងសុភមង្គល, ដៃស្ដាំកាន់ការចងចាំបាន, Huakaibubai ......',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_36/59546781_105680237312953_6734314939793539072_n.jpg'
          },
          {
            'id': '3000000043',
            'nickname': 'ខ្ញុំមានសុវត្ថិភាព',
            'sign': 'តែងតែមានការភ័យខ្លាចខ្ញុំមានថ្ងៃមួយអ្នកនឹងរកឃើញខ្ញុំមិនគិតថាអ្នកបានល្អដូច្នេះ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_35/66760271_101097387886966_895136240356032512_n.jpg'
          },
          {
            'id': '3000000042',
            'nickname': 'មិនសោកស្តាយសុបិន្តចាក',
            'sign': 'សើចគ្រាន់តែមុខមានអ្វីដែលត្រូវធ្វើជាមួយសុភមង្គល។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_34/69997153_168514944303314_6367361747296190464_n.jpg'
          },
          {
            'id': '3000000041',
            'nickname': 'សក់ប្រវែងខូចស្មា',
            'sign': 'អារម្មណ៍រវាងមនុស្សពីរនាក់គឺដូចឆន្ទះ, stitch ពេលដែលបានបង្កើតឡើង, ត្រូវប្រុងប្រយ័ត្ននិងវែង; បានយកចេញនៅពេលពួកគេគ្រាន់តែត្រូវការដើម្បីទាញទន់ភ្លន់។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_33/40064515_129222281351112_8499490629514952704_n.jpg'
          },
          {
            'id': '3000000040',
            'nickname': 'ផ្ក្រ Meijuan',
            'sign': 'ជាចុងក្រោយ, គំនិតដំបូងរបស់មនុស្សនៅពេលព្រឹកនិងពេលល្ងាចគំនិតផ្ទាល់ខ្លួនមិនមែនដើម្បីធ្វើឱ្យអ្នកសប្បាយចិត្តគឺដើម្បីប្រជាជនប្រជាជនរងទុក្ខវេទនារបស់អ្នកអនុញ្ញាតឱ្យ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_32/65602530_315794112641884_1644487628394856448_n.jpg'
          },
          {
            'id': '3000000039',
            'nickname': 'ប្រេងដូងបានកើនឡើង',
            'sign': 'បេះដូងរបស់ខ្ញុំហាក់ដូចជាត្រូវបានកំទេចយ៉ាងខ្លាំង, ហើយបន្ទាប់មកយ៉ាងស្វិតស្វាញធ្លាក់ចុះ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_31/67098031_1141261576075396_4684128853851897856_n.jpg'
          },
          {
            'id': '3000000038',
            'nickname': 'នៅរដូវក្តៅ Gardenia',
            'sign': 'បន្ទាប់ពីបានចាកចេញពីបំណងប្រាថ្នាដោយស្មោះជីវិតរបស់អ្នកដទៃឡើយ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_30/61172118_690550838030824_9086053900812812288_n.jpg'
          },
          {
            'id': '3000000037',
            'nickname': 'មានឆន្ទៈក្នុងការគាំទ្រឆ្នាំមកនេះ',
            'sign': 'សូម្បីតែប្រសិនបើអ្នកមិនស្រឡាញ់, ហេតុអ្វីបានជាមនុស្សរាប់ពាន់នាក់នៃលេសប៉ុណ្ណោះទេប៉ុន្តែថែម pulpy ដូច្នេះ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_29/70600223_552025528987374_6672831628252807168_n.jpg'
          },
          {
            'id': '3000000036',
            'nickname': 'ពាក្យសេចក្ដីស្រឡាញ់រ',
            'sign': 'ពិភពលោកនេះនឹងមិនបានទេព្រោះអ្នកពីរបៀបវេទនា, របៀបល្អវាគឺសម្រាប់អ្នក។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_28/67668498_497242064437276_4380950161854038016_n.jpg'
          },
          {
            'id': '3000000035',
            'nickname': 'ផ្លូវនៃមនុស្សចាស់',
            'sign': 'តើខ្ញុំត្រូវបានគេប្រើដើម្បីឱ្យមានការភ័យខ្លាចនៃការដែលជាការល្អនោះជាការគ្មានមេត្តាបាត់បង់។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_27/51924534_374885510003890_5649649772714262528_n.jpg'
          },
          {
            'id': '3000000034',
            'nickname': 'Gardenia ក្តៅ',
            'sign': 'សើចគ្រាន់តែមុខមានអ្វីដែលត្រូវធ្វើជាមួយសុភមង្គល។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_26/70934557_375568013397743_9080808053527281664_n.jpg'
          },
          {
            'id': '3000000033',
            'nickname': 'កូរ៉េខាងជើងខាងត្បូងតាមផ្លូវផ្លូវ',
            'sign': 'បងប្អូនជាទីស្រឡាញ់អើយមិនបានវិលត្រឡប់មកវិញ, មនុស្សចាស់មិនបានគ្របដណ្តប់, ខ្ញុំត្រូវបានគេបំភ្លេចចោលរួចទៅហើយដោយអ្នក។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_25/69259229_992186177786971_6488615683448897536_n.jpg'
          },
          {
            'id': '3000000032',
            'nickname': 'សួនផ្កា',
            'sign': 'ស្រឡាញ់អ្នកជារៀងរាល់ថ្ងៃខ្ញុំរីកចម្រើនវាជាធូលីដី។ ',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_24/31960507_112717762934016_4241099171928473600_n.jpg'
          },
          {
            'id': '3000000031',
            'nickname': 'ក្តីសុបិន្តផ្កា',
            'sign': 'ទីបំផុតខ្ញុំចាំស្នាមញញឹមរបស់អ្នក។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_23/50789975_111472049964103_7408728043394433024_o.jpg'
          },
          {
            'id': '3000000030',
            'nickname': 'បរិសុទ្ធនិងបបូរមាត់និងឆោតល្ងង់',
            'sign': 'វាគឺជារឹងរូសខ្លាំងណាស់ទៅលើ, immersed នៅក្នុងការចងចាំការស្លាប់យឺត។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_22/66500440_506311170112544_1443274376286830592_n.jpg'
          },
          {
            'id': '3000000029',
            'nickname': 'ហេតុអ្វីបានជាអ្នករាល់គ្នាមិនរីក Shili ខ្យល់',
            'sign': 'ការប៉ះទង្គិចការចងចាំ, ជួបគ្នានៅលើមេឃខៀវស្លេកចាក់ចូលទៅក្នុងភាពអស់កល្បជានិច្ច។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_21/69277200_532049184223874_6700300993537507328_n.jpg'
          },
          {
            'id': '3000000028',
            'nickname': 'ស៊ូយីស, ដកដើមត្រែង',
            'sign': 'អ្នកឥឡូវនេះតើអ្នកតំណាងរបៀបនាពេលអនាគតពីរបៀបក្នុងការរស់នៅ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_20/69262471_433837260558165_938819416420777984_n.jpg'
          },
          {
            'id': '3000000027',
            'nickname': 'ខ្ញុំបានយំចេញពី',
            'sign': 'លទ្ធភាពនៃការនាពេលអនាគតទាំងអស់មានអំណរសប្បាយចង់បង្អង់និងបើកឡើងភាគច្រើននៃការសោកស្តាយទាំងអស់នៅពេលក្រោយទៀត។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_19/72469102_599349703934239_4415674761988800512_o.jpg'
          },
          {
            'id': '3000000026',
            'nickname': 'លោក Yang គួយចាប់ផ្តើមជី',
            'sign': 'បុរសមិនដែលបដិសេធមិនស្ត្រីណាមួយមានអារម្មណ៍ល្អបើទោះបីជាគាត់មានស្ត្រីម្នាក់',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_18/62514780_102759154337076_7550328897485668352_n.jpg'
          },
          {
            'id': '3000000025',
            'nickname': '(● - ●)',
            'sign': 'ខ្ញុំចង់ហត់នឿយកិច្ចខិតខំប្រឹងប្រែងទាំងអស់ដើម្បីសរសេរពាក្យមួយ, ផ្តល់ឱ្យឡើង។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_17/52842301_118308762603434_3286629487386558464_n.jpg'
          },
          {
            'id': '3000000024',
            'nickname': 'របដណ្តប់តែឆ្នាំមកនេះ',
            'sign': 'ច្រើនដង, យើងមិនអាចអនុញ្ញាតឱ្យចូលទៅនៅក្នុងការពិតមិនមែនគ្នា, ប៉ុន្តែអ្នកដែលឆ្លងកាត់ការចងចាំរួម។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_16/70891326_358657255013397_8302682905751060480_n.jpg'
          },
          {
            'id': '3000000023',
            'nickname': 'ទីក្រុងពាក់កណ្តាលទីក្រុ',
            'sign': 'មិនមានបទចម្រៀងមួយដែលធ្វើឱ្យអ្នកមិនអាចធ្វើឱ្យខ្ញុំចងចាំ',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_15/27541122_197760074140269_7373932128867129976_n.jpg'
          },
          {
            'id': '3000000022',
            'nickname': 'Yugao Ruoxue',
            'sign': 'ត្រលប់ទៅពេលអនាគតដើម្បីបន្តដើម្បីធ្វើដូចនោះកុមារស្រឡាញ់សើចទេតែសើចឯកោតិចតួច។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_14/70839879_446838605928687_4328634977697660928_n.jpg'
          },
          {
            'id': '3000000021',
            'nickname': 'ស្នោនៅរដូវក្តៅ',
            'sign': 'អារម្មណ៍គឺថាអ្នកប៉ះពាល់ដល់អ្នកដទៃទៀតថាតើចេតនាឬអចេតនានោះមានមនុស្សម្នាក់ដែលតែងតែនឹងមានការប៉ះពាល់ដល់អ្នកមួយទៅ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_13/70983829_374306596819133_2682803372431507456_n.jpg'
          },
          {
            'id': '3000000020',
            'nickname': 'Aegean ╬បានស្បថ',
            'sign': 'ពិភពលោកនេះនឹងមិនបានទេព្រោះអ្នកពីរបៀបវេទនា, របៀបល្អវាគឺសម្រាប់អ្នក។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_12/50259506_347616312756732_7942388347081588736_n.jpg'
          },
          {
            'id': '3000000019',
            'nickname': 'Hisako',
            'sign': 'សេចក្ដីស្រឡាញ់មក, វាបានចូលមកផងដែរបានស្អប់ល្អ, ឈឺចាប់នឹងយល់ពីអ្វីគ្រប់យ៉ាងគឺជាការខុស។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_11/66350351_104472014201525_645901190839664640_n.jpg'
          },
          {
            'id': '3000000018',
            'nickname': 'សិស្សឈ្មោះពេព្រិល',
            'sign': 'នេះជាច្រើនទៀតដែលមានការសង្ស័យកាន់តែច្រើនខ្វល់ថាយើងចង់ធ្វើគួរតែជាការថែទាំជាច្រើនទៀតគួរតែមានការជឿជាក់បន្ថែមទៀត។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_10/46791028_200023757549378_897925417887858688_n.jpg'
          },
          {
            'id': '3000000017',
            'nickname': 'នៅរដូវក្តៅ',
            'sign': 'ការរស់នៅល្អនោះទេព្រោះយើងនឹងត្រូវស្លាប់រយៈពេលយូរ, រយៈពេលយូរ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_9/67656181_110829653599795_1873082168893243392_n.jpg'
          },
          {
            'id': '3000000016',
            'nickname': '暧心ក្មេងប្រុស Dzu',
            'sign': 'ខ្ញុំនឹងព្យាយាមដើម្បីញញឹម bloom ។ ',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_8/69265370_158452328637437_6690480589469908992_n.jpg'
          },
          {
            'id': '3000000015',
            'nickname': 'លោកបានរំឭកចិញ្ចើមខែក្រោយ',
            'sign': 'ខ្ញុំតែងតែញញឹមដោយសារតែដែលត្រូវបានប៉ះពាល់ដល់ចិត្តរបស់ខ្ញុំឱ្យប៉ះពាល់ដល់ក្នុងជ្រៅពេកខ្ញុំមិនយំ។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_7/59718000_702634680155708_7923012654392672256_n.jpg'
          },
          {
            'id': '3000000014',
            'nickname': 'មាត្រាស្ត្រីម្នាក់បានបញ្ឈប់ខ្ញុំនៅពេលដែលហឺរ',
            'sign': 'ភាពចេញ, គេហៅថាសភាវគតិ។ ',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_6/59708918_460207131452058_8380424283414855680_n.jpg'
          },
          {
            'id': '3000000013',
            'nickname': 'រកមើលនៅក្នុងពពកនៅលើមេឃបានចុះសំពៅដែល〆',
            'sign': 'បើទោះបីជាពួកគេមិនសប្បាយចិត្ត, និងការមិនឱ្យរំខានដល់សុភមង្គលរបស់អ្នកដទៃ, នេះគឺជាគោលការណ៍',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_5/53510726_655802924876667_5105121861738430464_n.jpg'
          },
          {
            'id': '3000000012',
            'nickname': 'នៅទីបំផុតស្លាប់និងការរស់នៅ',
            'sign': 'ឧបសគ្គធំបំផុតរបស់បុគ្គលមួយមិនមែនអត្មានិយម',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_4/71110174_795989374153571_3752528220893741056_n.jpg'
          },
          {
            'id': '3000000011',
            'nickname': 'ពីផ្លូវ',
            'sign': 'ខ្ញុំចង់ថែរក្សាអ្នកសម្រាប់ជីវិត។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_3/40495893_282837315878297_3390384713163079680_n.jpg'
          },
          {
            'id': '3000000010',
            'nickname': 'ទីក្រុងចាស់ Lane ខាងជើងបេះដូងវឹកវរ',
            'sign': 'រឿងសោកសៅបំផុតគឺមិនថាអ្នកបាត់បង់សេចក្ដីស្រឡាញ់, អ្នកបាត់បង់ដោយខ្លួនឯងសម្រាប់សេចក្ដីស្រឡាញ់។',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_2/70088930_120186289363242_9158428064005226496_n.jpg'
          },
          {
            'id': '3000000009',
            'nickname': 'ស្របពេលជាមួយនឹងផ្កា',
            'sign': 'រឿងដូចគ្នានេះដែរបានកើតឡើង, មនុស្សមួយចំនួនមានអារម្មណ៍ថាមានការឈឺចាប់ខ្លាំងណាស់ហើយប្រជាជនមួយចំនួនអាចទទួលយកបាន។ ',
            'created_at': '14/11/2019',
            'avatar': 'http://oss-1.soogua.cn/avatars/global/pic_1/69652520_120209109351093_3061962071710105600_n.jpg'
          },
          {
            'id': '3000000008',
            'nickname': '惊鸿一瞥',
            'sign': 'Sometimes, I feel like a little girl who needs protection.',
            'created_at': '13/11/2019',
            'avatar': 'http://zs-3-km.oss-cn-beijing.aliyuncs.com/1576899326460.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped lang='less'>
.session{
  height: 100vh;
  min-width: 300px;
  width: 300px;
  border-right: 1px solid #ddd;
  overflow-x: scroll;
  .message-box{
    .item{
      height: 70px;
      width: 100%;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      position: relative;
      .avatar {
        min-width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        // border: 1px solid red;
        // box-sizing: border-box;
        img {
          width: 50px;
          height: 50px;
          border-radius: 3px;
        }
      }
      .message{
        width: 230px;
        display: flex;
        flex-direction: column;
        .time{
          position: absolute;
          right: 10px;
          top: 7px;
          color: gray;
          span{
            font-size: 12px;
          }
        }
        .nickname {
          height: 30px;
          line-height: 30px;
          width: 145px;
          h5{
            font-size: 14px;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; 
          }
        }
        .last-message {
          height: 40px;
          line-height: 40px;
          font-size: 12px;
          padding-right: 10px;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: gray;
          }
        }
      }
    }
  }
}
</style>