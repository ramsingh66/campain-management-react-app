import { FunctionComponent, ReactNode, useState } from "react";

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
    <button onClick={() => setSelecedTab(tab.name)} id={tab.name}>
      {tab.name}
    </button>
  ));

  return (
    <div>
      {tabControls}
      {tabs.map(({ renderTab, name }) => (
        <TabComponent
          renderTab={renderTab}
          visible={selectedTab === name}
          key={name}
        />
      ))}
    </div>
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
