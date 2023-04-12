import React, {FC} from "react";
import Header from "../components/Header";

interface Props  {
    children: React.ReactNode
}

const MainLayout: FC<Props> = ({children} ) => {
    return (
        <div className={"flex"}>
            <div className={"w-1/6"}>
                <Header />
            </div>
            <div className={"w-5/6"}>
                {children}
            </div>
        </div>
    )
}

export default MainLayout;