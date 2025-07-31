import categoryItems from "@/sections/Categories/categoryItem"

const collectionGroups = [
  {
    isActive: true,
    title: "Movies",
    items: [
      {
        title: "Our Genres",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action 1",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 1",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 1",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 1",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Trending Now",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },
        ],
      },
      {
        title: "New Releases",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/5.jpg",
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },

        ],
      },
      {
        title: "Must - Watch Movies",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            rating: {
              value: 5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 57min",
            rating: {
              value: 4,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 57min",
            rating: {
              value: 3,
              label: '20K'
            },
          },
          
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 2,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            rating: {
              value: 1,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.1,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },

        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },
  
  {
    title: "Shows",
    items: [
      {
        title: "Our Genres 2",
        categoryItems,
      },
      {
        title: "Popular Top 10 In Genres 2",
        categoryItems: [
          {
            title: "Action 1",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 1",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 1",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 1",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 2",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 3",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },

          {
            title: "Action 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Adventure 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Comedy 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
          {
            title: "Drama 4",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/action/1.jpg",
              "/src/assets/images/categories/action/2.jpg",
              "/src/assets/images/categories/action/3.jpg",
              "/src/assets/images/categories/action/4.jpg",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "Trending Shows Now",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },

        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
      {
        title: "New Released Shows",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            season: '5 Season',
            href: '/show',
          },

        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },

      {
        title: "Must - Watch Shows",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            rating: {
              value: 5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 57min",
            rating: {
              value: 4,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 57min",
            rating: {
              value: 3,
              label: '20K'
            },
          },
          
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 2,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            rating: {
              value: 1,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.1,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: '20K'
            },
          },

        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          },
        },
      },
    ],
  },

]

export default collectionGroups
