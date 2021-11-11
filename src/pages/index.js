
import React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"



const IndexPage = (props) => {
const { t } = useTranslation()  

  return (
    <Layout>
      <div>
        <h1>{t('home.test')}</h1>
      </div>
    </Layout>
  )
}

export default IndexPage