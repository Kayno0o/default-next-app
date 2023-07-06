import React from 'react'
import Container from '../components/base/Container'
import H1 from '../components/base/H1'
import Button from '../components/base/Button'
import useToast from '../hooks/useToast'
import { ToastColor } from '../types/toast'

function Home() {
  const { addToast } = useToast()

  return (
    <>
      <Container>
        <H1>blblbl</H1>
        <Button onClick={() => addToast('test trop cool', 'warning')} className={ToastColor.warning.bg}>
          warning
        </Button>
        <Button onClick={() => addToast('test trop cool', 'error')} className={ToastColor.error.bg}>
          error
        </Button>
        <Button onClick={() => addToast('test trop cool', 'success')} className={ToastColor.success.bg}>
          success
        </Button>
        <Button onClick={() => addToast('test trop cool', 'info')} className={ToastColor.info.bg}>
          info
        </Button>
      </Container>
    </>
  )
}

export default Home
