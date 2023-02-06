import React, { useState } from 'react'
import Button from './Button'

const Tabs = ({ tabs = [], initTab = 0, className = '', classNameHeader = '', classNameContent = '' } = {}) => {
  const [activeTab, setActiveTab] = useState(initTab)

  const handleActiveTab = (tabId) => {
    return () => setActiveTab(tabId)
  }

  return (
    <div className={`${className}`}>
      <header className={`flex flex-wrap items-center ${classNameHeader}`}>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            className={`justify-self-stretch px-2 py-1 ${activeTab === tab.id ? 'bg-neutral-800 rounded-md text-white' : 'text-neutral-600 font-normal bg-transparent'}`}
            onClick={handleActiveTab(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </header>

      <div className={` ${classNameContent}`}>
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default Tabs
