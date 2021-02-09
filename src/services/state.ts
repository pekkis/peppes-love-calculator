import createStore from "zustand"
import crypto from "crypto-js"

import { create, all } from 'mathjs';
const math = create(all);
math.config({
    number: 'BigNumber',      
    precision: 64             
  })

const LOVE_CONSTANT = 2

const ord = (str) => {
    return str.charCodeAt(0);
}

type State = {
    first: string;
    second: string;
    love: {
        calculated: boolean;
        calculating: boolean;
        first: string;
        second: string;
        percentage: number;
    };
    calculateLove: () => void;
    setFirst: (first: string) => void;
    setSecond: (second: string) => void;
}
  
  const useStore = createStore<State>(set => ({
    first: '',
    second: '',
    love: {
        calculated: false,
        calculating: false,
        first: '',
        second: '',
        percentage: 0
    } ,
    setFirst: first => {

        set({
            first
        })

    },
    setSecond: second => {

        set({
            second
        })

    },

    calculateLove: () => {

        set(({
            love: {
                calculating: true,
                first: '',
                second: '',
                calculated: false,
                percentage: 0
            }
        }))

        set(state => {

            const combined = `${state.first.toLocaleLowerCase()}${state.second.toLocaleLowerCase()}`

            const arraynized = Array.from(combined)

            const ordized = arraynized.map(ord)

            const sum = (ordized.reduce((a, o) => a + o) + LOVE_CONSTANT).toString()

            const md5ized = crypto.MD5(sum).toString()

            const hexdec = hex => {
                const arr = Array.from(hex)
                const arr2 = arr.map((a, i) => {
                    const h = parseInt(a, 16)
                    const p = math.pow(math.bignumber(16), math.bignumber(hex.length - i - 1))
                    return math.multiply(h, p)
                })

                console.log({
                    arr,
                    arr2
                })

                return math.sum(arr2)
            }

            const hexdecced = hexdec(md5ized)

            const sub2 = math.subtract(math.bignumber(math.pow(2, 128)), 1)

            const divved = math.divide(hexdecced, sub2)

            const percentage = math.round(math.multiply(divved, 100))            

            return {
                love: {
                    first: state.first,
                    second: state.second,
                    percentage: parseInt(percentage.toString(), 10),
                    calculating: true
                }
            }
        })

        setTimeout(() => {

            set(state => {

                return {
                    love: {
                        ...state.love,
                        calculating: false,
                        calculated: true
                    }
                }

            })

        }, 3000)

    }
  }))

  export default useStore