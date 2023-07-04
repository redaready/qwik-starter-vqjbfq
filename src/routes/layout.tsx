import {
  $,
  component$,
  getLocale,
  Slot,
  useOnDocument,
  useStyles$,
} from '@builder.io/qwik';
import { Link, RequestHandler, routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

import styles from './styles.css?inline';
import { register } from 'swiper/element/bundle';
register();
const swiperRegister = () => {
  register();
};

export default component$(() => {
  useOnDocument('qinit', $(swiperRegister));
  return (
    <>
      <Header></Header>
      {/* <main>component: ${getLocale()}</main> */}
      <swiper-container>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        ...
      </swiper-container>
    </>
  );
});
