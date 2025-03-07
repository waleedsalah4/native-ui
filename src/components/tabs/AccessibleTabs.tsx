"use client";
import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  MouseEvent,
} from "react";
import A11yTabs from "@/constants/tabs.json";

const tabs: {
  id: number;
  title: string;
  content: string;
}[] = A11yTabs.a11y_tabs;

function AccessibleTabs() {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const handleTabClick = (
    event: MouseEvent<HTMLAnchorElement>,
    tabId: number
  ) => {
    event.preventDefault();
    setActiveTab(tabId);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    let newIndex = currentIndex;

    switch (event.key) {
      case "ArrowLeft":
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case "ArrowRight":
        newIndex = (currentIndex + 1) % tabs.length;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabs.length - 1;
        break;
    }

    setActiveTab(tabs[newIndex].id);
  };

  useEffect(() => {
    tabRefs.current[activeTab]?.focus();
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md bg-[#8080801a] p-8" onKeyDown={handleKeyDown}>
        <ul
          aria-labelledby="tabs-title"
          role="tablist"
          className="flex items-center gap-4"
        >
          {tabs.map((tab, index) => (
            <li key={tab.id} role="presentation">
              <a
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`tab-${index + 1}`}
                href={`#${tab.id}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                tabIndex={activeTab === tab.id ? 0 : -1}
                onClick={(e) => handleTabClick(e, tab.id)}
                className="text-lg aria-selected:font-bold aria-selected:text-[#ff4500] aria-selected:underline"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={`${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tabs.findIndex((t) => t.id === tab.id) + 1}`}
              hidden={activeTab !== tab.id}
            >
              <p>{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
      <section>
        <h2>More content here</h2>
        <p>use keyboard arrow to navigate between tabs</p>
        {/* Additional content can be added here */}
      </section>
    </div>
  );
}

export default AccessibleTabs;

/*
  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      case "Home":
        e.preventDefault();
        setActiveTab(0);
        break;
      case "End":
        e.preventDefault();
        setActiveTab(tabRefs.current.length - 1);
        break;
    }
  };

  const moveLeft = () => {
    setActiveTab((prev) =>
      prev === 0 ? tabRefs.current.length - 1 : prev - 1
    );
  };

  const moveRight = () => {
    setActiveTab((prev) =>
      prev === tabRefs.current.length - 1 ? 0 : prev + 1
    );
  };

*/
