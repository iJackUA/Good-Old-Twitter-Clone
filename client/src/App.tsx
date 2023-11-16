import "./App.css";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { MantineProvider } from "@mantine/core";
import { MainBanner } from "./components/MainBanner";
import { Navbar } from "./components/Navbar";
import { AppShell, Burger } from "@mantine/core";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
        layout="alt"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <Navbar></Navbar>
        </AppShell.Navbar>

        <AppShell.Main>
          <MainBanner></MainBanner>
        </AppShell.Main>

        <AppShell.Aside p="md">
          Aside
        </AppShell.Aside>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
