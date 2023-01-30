import React, { useState } from 'react'
import Button from './Button'

const Tabs = ({ tabs = [], initTab = 0, className = '' } = {}) => {
  const [activeTab, setActiveTab] = useState(initTab)

  const handleActiveTab = (tabId) => {
    return () => setActiveTab(tabId)
  }

  return (
    <div className={`${className}`}>
      <header className='flex gap-8 ml-2 mb-4'>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            className={`bg-transparent ${activeTab === tab.id ? 'text-neutral-900 font-bold' : 'text-neutral-700 font-normal'}`}
            onClick={handleActiveTab(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </header>

      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default Tabs
