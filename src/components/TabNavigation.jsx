"use client";

import { useState } from "react";
import { Tabs } from "@mantine/core";

const TabNavigation = ({ tabsData, cardsData, renderCard }) => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-center">
                <Tabs color="rgba(0,0,0,1)" value={activeTab} onChange={setActiveTab} className="mt-6 w-full">
                    <div className="w-full overflow-x-auto custom-scrollbar pb-3">
                        <Tabs.List className="flex md:justify-center space-x-4 md:space-x-8 w-max md:w-full border-b border-gray-200 px-4">
                            {tabsData.map((tab) => (
                                <Tabs.Tab
                                    key={tab.id}
                                    value={tab.id}
                                    className={`text-sm font-semibold tracking-wide pb-2 transition-colors min-w-max ${
                                        activeTab === tab.id ? "text-black border-b-2 border-black" : "text-gray-400"
                                    }`}
                                >
                                    {tab.label}
                                </Tabs.Tab>
                            ))}
                        </Tabs.List>
                    </div>
                </Tabs>
            </div>

            <div className="w-full mt-4">
                <Tabs value={activeTab} onChange={setActiveTab} className="w-full">
                    {tabsData.map((tab) => (
                        <Tabs.Panel key={tab.id} value={tab.id} className="w-full">
                            <div className="w-full overflow-x-auto custom-scrollbar">
                                <div className="flex flex-nowrap gap-8 w-max py-6">
                                    {cardsData[tab.id]?.length > 0 ? (
                                        cardsData[tab.id].map((product) => renderCard(product))
                                    ) : (
                                        <p className="text-gray-400 w-full text-center">No products available</p>
                                    )}
                                </div>
                            </div>
                        </Tabs.Panel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default TabNavigation;
