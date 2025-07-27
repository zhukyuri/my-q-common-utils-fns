clear
npm run build

node -e "
console.log(new Date('2025-07-28'));

  const { MyQFormatDate } = require('./index.js');
  const formatter = new MyQFormatDate('2025-07-28');
  
  let res = formatter.allDaysOfMonth_ByDateEnd(new Date());
  res = res.map((i)=> ({
        date: i.date,
        year: i.year,
        month: i.month,
        day: i.day,
  }))
  console.log(res);

  console.log('===========================')
  
  let res2 = formatter.allMonthOfYear_ByDateEnd('2025-07-28');
  res2 = res2.map((i)=> ({
        date: i.date,
        year: i.year,
        month: i.month,
        day: i.day,
  }))
  console.log(res2);
  
  
  "