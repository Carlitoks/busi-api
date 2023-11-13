import dayjs from 'dayjs';

export default class DateTimeUtility {
  static getCurrentTimeStamp() {
    return  dayjs().format('YYYY-MM-DD HH:mm:ss');
  }
}
