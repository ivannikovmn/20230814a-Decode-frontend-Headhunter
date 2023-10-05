export const monthsInRussian = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

export const monthsInRussian2 = [
'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
]; 

// export function getAgeFromBirthday(birthday) {
  export function getAgeFromBirthday(b) {
    // const birthday = new Date (resume.birthday)
    const birthday = new Date (b)

    // const monthsInRussian = [
    //   'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    //   ];
  
      // const monthsInRussian2 = [
      //   'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
      //   ];    
  
      let age = 0;

      age = new Date().getTime() - birthday.getTime();
      // console.log(age);
      // console.log('here2 ', parseInt(age / (1000 * 60 * 60 * 24 * 365)));
      age = parseInt(age / (1000 * 60 * 60 * 24 * 365))
      // console.log('here ', new Date().getTime() - birthday.getTime());
      return age;
}