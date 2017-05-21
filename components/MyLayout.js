import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;



// import Header from './Header';
// import Head from 'next/head';
// import { Container } from 'reactstrap';

// const Layout = (props) => (
//   <div>
//     <Head>
//       <title>ACTIVISM</title>
//       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
//     </Head>
//     <Container>
//       <Header />
//       {props.children}
//     </Container>
//   </div>
// );

// export default Layout;
