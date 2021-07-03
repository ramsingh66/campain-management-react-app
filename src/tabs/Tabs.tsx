import { FunctionComponent, ReactNode, useState } from "react";
import {  TabsContainer, TabButton } from "./Tabs.styles";

type Tab = {
  readonly name: string;
  readonly renderTab: () => ReactNode;
};

type Props = {
  readonly tabs: ReadonlyArray<Tab>;
};

export const Tabs: FunctionComponent<Props> = ({ tabs }) => {
  const [selectedTab, setSelecedTab] = useState<string | undefined>(
    tabs[0]?.name
  );

  const tabControls = tabs.map((tab) => (
    <TabButton
      onClick={() => setSelecedTab(tab.name)}
      key={tab.name}
      {...{primary:tab.name===selectedTab}}
    >
      {tab.name}
    </TabButton>
  ));

  return (
    <TabsContainer>
      {tabControls}
      {tabs.map(({ renderTab, name }) => (
        <TabComponent
          renderTab={renderTab}
          visible={selectedTab === name}
          key={name}
        />
      ))}
    </TabsContainer>
  );
};

const TabComponent: FunctionComponent<
  Pick<Tab, "renderTab"> & { readonly visible: boolean }
> = ({ renderTab, visible }) => {
  if (!visible) {
    return null;
  }

  return <div>{renderTab()}</div>;
};
