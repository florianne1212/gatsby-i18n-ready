import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { useTranslation } from "react-i18next"

const SecondPage = () => {
  const { t } = useTranslation()

  return(
      
    <div>
        <Layout>
            <h1>{t('home.test')}</h1>
            <p>{t('home.test')}</p>
        </Layout>
    </div>
    
  )
}
export default SecondPage