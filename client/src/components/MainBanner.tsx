import { Text, Title, Image } from '@mantine/core';
import classes from './MainBanner.module.css';

export function MainBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Welcome to the GOTWIC</Title>
        <Text fw={500} fz="lg" mb={5}>
          The very basic social network!
        </Text>


        <div className={classes.controls}>
          <Text>See you soon!</Text>
        </div>
      </div>
      <Image src="/img/main_banner.svg" className={classes.image} />
    </div>
  );
}
