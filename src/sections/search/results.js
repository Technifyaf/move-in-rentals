/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-card';

import thumb1 from 'assets/images/blog/1.png';
import thumb2 from 'assets/images/blog/2.png';
import thumb3 from 'assets/images/blog/3.png';
import { Link } from 'react-scroll';

const data = [
  

];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      sx={styles.paginationButton}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: 'unslick',
    },
  ],
};

const Searchresults = () => {
  return (

    <Box id="blog" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Hi there "
          title="We are currently building the site. Sign up for our newsletter to stay in the loop"
        />
        <a href='https://us10.list-manage.com/contact-form?u=808c788c96e899a4b2e290393&form_id=c7a014178c47fcf2194d7283cca1b984'  >
		<Button sx={styles.button} variant='primary'>
								Contact us
		</Button>
		</a>
        <Slider sx={styles.blogWrapper} {...settings}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Searchresults;

const styles = {
  section: {
    pt: [30, 30, 6],
    pb: [50, 50, 50, 100, 8, 9],
  },
  heading: {
    mb: [30, 30, 30, 50, 60],
  },
  blogWrapper: {
    gap: 30,
    display: ['grid', 'grid', 'grid', 'block', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    m: [0, 0, 0, '0 -15px', 0],
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
        outline: '0 none',
    },
    
}

,
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
};
