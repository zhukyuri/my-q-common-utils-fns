import {
  format,
  subDays,
  subMonths,
  subYears,
  addDays,
  addMonths,
  eachMonthOfInterval,
  eachDayOfInterval,
  startOfDay,
} from 'date-fns'
import { UTCDate } from "@date-fns/utc";
export type TSubtract = 'month' | 'day' | 'year'
export type TAmount = number

export interface TDateInitFormat {
  year: number
  monthIndex: number
  day: number
}

export interface TFullDate {
  date: Date | string
  year: number
  month: number
  day: number
  key?: string
}

export class MyQFormatDate {
  public baseDate: Date
  public dateArray: Date[] = []

  constructor(baseDate?: Date) {
    this.baseDate = !baseDate ? new Date() : baseDate
  }

  public setBaseDate = (newBaseDate: TDateInitFormat | undefined): void => {
    if (newBaseDate) this.baseDate = new Date(newBaseDate.year, newBaseDate.monthIndex, newBaseDate.day)
    else this.baseDate = new Date()
  }

  public getNewDate = ({ year, monthIndex, day }: TDateInitFormat): string => {
    return new Date(year, monthIndex, day).toDateString()
  }

  public formatDate = (date: Date, formatStr = 'dd.MM'): string => format(date, formatStr)

  public begginingDay = (date: Date = this.baseDate): Date => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate())
  }

  public begginingMonth = (date: Date = this.baseDate): Date => {
    return new Date(date.getFullYear(), date.getMonth())
  }

  public subtractDate = (
    date: Date,
    subtract: TSubtract = 'month',
    amount: TAmount = 1,
    addDaysAmount: number = 0
  ): Date => {
    const startDay = this.begginingDay(date)
    let result: Date

    if (subtract === 'day') {
      result = subDays(startDay, amount)
    } else if (subtract === 'month') {
      result = subMonths(startDay, amount)
    } else if (subtract === 'year') {
      result = subYears(startDay, amount)
    } else {
      result = startDay
    }

    if (addDaysAmount) {
      result = addDays(result, addDaysAmount)
    }

    return result
  }

  public dateListDayOfMoth = (baseDate: Date = this.baseDate): Date[] => {
    const endDate: Date = this.begginingDay(baseDate)
    let currentDate: Date = this.subtractDate(endDate, 'month', 1, 1)
    this.dateArray = []

    while (currentDate <= endDate) {
      this.dateArray.push(currentDate)
      currentDate = addDays(currentDate, 1)
    }
    return this.dateArray
  }

  public dateListMonthOfYear = (baseDate: Date = this.baseDate): Date[] => {
    const endDate: Date = this.subtractDate(this.begginingMonth(baseDate))
    let currentDate: Date = this.subtractDate(endDate, 'year', 1)
    this.dateArray = []

    while (currentDate <= endDate) {
      this.dateArray.push(currentDate)
      currentDate = addMonths(currentDate, 1)
    }
    return this.dateArray
  }

  public daysOfMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate()
  }

  public endDayOdMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  }

  public allDaysOfMonth_ByDateEnd = (dateEnd: string = this.baseDate.toISOString()): TFullDate[] => {
    const _endDateUTC = new UTCDate(dateEnd)
    const startDate = addDays(subMonths(_endDateUTC, 1), 1)

    const daysArray = eachDayOfInterval({
      start: startDate,
      end: _endDateUTC,
    })

    return daysArray.map((i) => ({
      date: startOfDay(new UTCDate(i)).toISOString(),
      year: i.getFullYear(),
      month: i.getMonth() + 1,
      day: i.getDate(),
      key: format(i, 'yy-MM-dd'),
    }))
  }

  public allMonthOfYear_ByDateEnd = (dateEnd: string = this.baseDate.toISOString()): TFullDate[] => {
    const _endDateUTC = new UTCDate(dateEnd)
    const startDate = subMonths(_endDateUTC, 11)

    const daysArray = eachMonthOfInterval({
      start: startDate,
      end: _endDateUTC,
    })

    return daysArray.map((i) => ({
      date: startOfDay(new UTCDate(i)).toISOString(),
      year: i.getFullYear(),
      month: i.getMonth() + 1,
      day: i.getDate(),
      key: format(i, 'yy-MM-dd'),
    }))
  }
}
