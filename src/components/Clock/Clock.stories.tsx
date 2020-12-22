import React, {useEffect, useState} from 'react';
import {Meta} from "@storybook/react/types-6-0";
import {Clock} from "./Clock";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

export default {
    title: 'Clock',
    component: Clock,
} as Meta;

const addZeroBeforeTime = (time: number) => time < 10 ? `0${time}` : time

export const ClockExample = () => {
  let [date, setDate] = useState(new Date())

  useEffect(() => {
      const intervalId = setInterval(() => {
          console.log('tick')
          setDate(new Date())
      })
      return () => {
          clearInterval(intervalId)
      }
  }, [])

  return (
      <div>
        <span>{addZeroBeforeTime(date.getHours())}</span>
          :
        <span>{addZeroBeforeTime(date.getMinutes())}</span>
          :
        <span>{addZeroBeforeTime(date.getSeconds())}</span>
      </div>
  )
}