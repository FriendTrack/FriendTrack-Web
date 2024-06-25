import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactsCount, QualitiesDevelopment } from "../AnalyticPage";
import QualitiesDevelopmentGraph from "./QualitiesDevelopmentGraph copy";
import ContactsCountGraph from "./ContactsCountGraph";
import { useState } from "react";
import { Contact } from "@/lib/api/requests/contact";

interface AnalyticWindow {
    contactsCount: ContactsCount;
    qualitiesDevelopment: QualitiesDevelopment;
    friends: Contact[];
    className?: string;
}

const AnalyticWindow = ({ qualitiesDevelopment, friends, className}: AnalyticWindow) => {
    const [selectedGraph, setSelectedGraph] = useState(0);

    return (
        <Tabs className={className} defaultValue="tab1">
            <TabsList aria-label="Manage your account">
                <TabsTrigger className={selectedGraph==0 ? "bg-grey-100":""} onClick={() => {setSelectedGraph(0)}} value="tab1">Количество контактов</TabsTrigger>
                <TabsTrigger className={selectedGraph==1 ? "bg-grey-100":""} onClick={() => {setSelectedGraph(1)}}value="tab2">Развитие аспектов общения</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
                <ContactsCountGraph></ContactsCountGraph>
            </TabsContent>
            <TabsContent value="tab2">
                <QualitiesDevelopmentGraph qualitiesDevelopment={qualitiesDevelopment} friends={friends}></QualitiesDevelopmentGraph>
            </TabsContent>
        </Tabs>
    );
};

export default AnalyticWindow;