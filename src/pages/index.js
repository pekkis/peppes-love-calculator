/** @jsx jsx */
import {jsx, Box, Flex, Heading, Input, Button} from "theme-ui"
import Results from "../components/Results"
import Spinner from "../components/Spinner"

import useStore from "../services/state"

const IndexPage = () => {

  const first = useStore(state => state.first)
  const second = useStore(state => state.second)
  const setFirst = useStore(state => state.setFirst)
  const setSecond = useStore(state => state.setSecond)
  
  const love = useStore(state => state.love)
  const calculateLove = useStore(state => state.calculateLove)

  const text = love.calculating ? 'Calculating Match' : 'Calculate Match'

  return (
    <Flex sx={{
      height: "100vh",
      width: "100%",
      placeContent: "center"
    }}>
      <Box as="div" sx={{
        m: 2,
        alignSelf: "center"
      }}>
        <Heading as="h1" sx={{
          color: 'primary',
          fontSize: 6,
          textShadow: '1px 1px 2px rgba(0,0,0,1)',
          textAlign: "center"
        }}>Peppe's Love Calculator</Heading>
        
        <Flex my={3} sx={{
          width: "100%",
          justifyContent: "center"
        }}>
          <Box sx={{
            flexBasis: "45%"
          }}>
        <Input sx={{
          fontFamily: "body",
          width: "100%"
        }}type="text" name="first" value={first} onChange={e => {setFirst(e.target.value)}} placeholder="Peppe" />
        </Box>
        <Box sx={{
          flexBasis: "10%",
          textAlign: "center"
        }}>
        ❤️
        </Box>
        <Box sx={{
            flexBasis: "45%"
          }}>
        <Input sx={{
          fontFamily: "body",
          width: "100%"
        }} type="text" name="second" value={second} onChange={e => {setSecond(e.target.value)}} placeholder="koiranmakkara" />
        </Box>
        </Flex>

        <Button
          sx={{
            cursor: "pointer",
            width: "100%",
            fontFamily: "body",
          }}
          disabled={love.calculating || (first.length === 0 || second.length === 0)}
          onClick={() => {
            calculateLove()
          }}
        >{text} {love.calculating && <Spinner />}</Button>


        <Results result={love} />

      </Box>
    </Flex>
  )
}

export default IndexPage
