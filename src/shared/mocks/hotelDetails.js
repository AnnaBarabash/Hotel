export const res = {
  result: 'OK',
  data: {
    body: {
      pdpHeader: {
        hotelId: '424023',
        destinationId: '1506246',
        pointOfSaleId: 'HCOM_US',
        currencyCode: 'USD',
        occupancyKey: 'A1',
        hotelLocation: {
          coordinates: { latitude: 40.752109, longitude: -73.985461 },
          resolvedLocation: 'CITY:1506246:PROVIDED:PROVIDED',
          locationName: 'New York',
        },
      },
      overview: {
        overviewSections: [
          {
            title: 'Main amenities',
            type: 'HOTEL_FEATURE',
            content: [
              '197 smoke-free guestrooms',
              'Daily housekeeping',
              'Restaurant and 2 bars/lounges',
              'Rooftop terrace',
              'Breakfast available',
              'Fitness center',
              'Self parking',
              '24-hour front desk',
              'Air conditioning',
              'Front desk safe',
              'ATM/banking services',
              'Laundry service',
              'Free WiFi ',
            ],
            contentType: 'LIST',
          },
          {
            title: 'What’s around',
            type: 'LOCATION_SECTION',
            content: [
              'In Midtown',
              '5th Avenue - 2 min walk',
              'Bryant Park - 3 min walk',
              "Macy's - 4 min walk",
              'Herald Square - 4 min walk',
              'New York Public Library - 5 min walk',
              'Times Square - 6 min walk',
              'Town Hall - 7 min walk',
              'Empire State Building - 8 min walk',
              'Broadway - 9 min walk',
              'Minskoff Theater - 10 min walk',
            ],
            contentType: 'LIST',
          },
          {
            type: 'TAGLINE',
            content: [
              '<b>Luxury hotel with 2 bars/lounges, near 5th Avenue </b>',
            ],
            contentType: 'LIST',
          },
          {
            type: 'HOTEL_FREEBIES',
            content: ['Free WiFi'],
            contentType: 'LIST',
          },
        ],
      },
      hotelWelcomeRewards: {
        applies: true,
        info: 'You can collect Hotels.com® Rewards stamps here',
      },
      propertyDescription: {
        clientToken: 'VtSShbNq8W9LkilyC-SniXX3UN8.',
        address: {
          countryName: 'United States of America',
          cityName: 'New York',
          postalCode: '10018',
          provinceName: 'NY',
          addressLine1: '63 W 38th St',
          countryCode: 'USA',
          pattern:
            'AddressLine1,#AddressLine2,#CityName,#ProvinceName,#PostalCode,#CountryName',
          fullAddress:
            '63 W 38th St, New York, NY, 10018, United States of America',
        },
        priceMatchEnabled: false,
        name: 'Refinery Hotel',
        starRatingTitle: '5 stars',
        starRating: 5.0,
        featuredPrice: {
          beforePriceText: 'Lowest price',
          afterPriceText: '',
          pricingAvailability: 'available on 01/09/22',
          pricingTooltip: 'Price may be available on other dates',
          currentPrice: { formatted: '$199', plain: 199.0 },
          taxInclusiveFormatting: false,
          bookNowButton: false,
        },
        mapWidget: {
          staticMapUrl:
            'https://maps-api-ssl.google.com/maps/api/staticmap?center=40.752109,-73.985461&format=jpg&sensor=false&key=AIzaSyDaDqDNrxWrxcURixO2l6TbtV68X0Klf4U&zoom=16&size=834x443&scale&signature&signature=GpiEU_s2-8PlDC9L6ElFaD7JRbg=',
        },
        roomTypeNames: [
          'Studio, 1 Queen Bed',
          'Studio, 1 King Bed',
          'Deluxe Room, 2 Queen Beds',
          'Atelier Executive Suite',
        ],
        tagline: ['Luxury hotel with 2 bars/lounges, near 5th Avenue'],
        freebies: ['Free WiFi'],
      },
      guestReviews: {
        brands: {
          scale: 10.0,
          formattedScale: '10',
          rating: 8.8,
          formattedRating: '8.8',
          lowRating: false,
          badgeText: 'Fabulous',
          total: 1011,
        },
      },
      atAGlance: {
        keyFacts: {
          hotelSize: [
            'This hotel has 197 rooms',
            'This hotel is arranged over 12 floors',
          ],
          arrivingLeaving: [
            'Check-in time 3 PM-1 AM',
            'Check-out time is  noon',
            'Express check-in/out',
          ],
          specialCheckInInstructions: [
            'Front desk staff will greet guests on arrival. ',
          ],
          requiredAtCheckIn: [
            'Credit card, debit card, or cash deposit required for incidental charges',
            'Government-issued photo ID may be required',
            'Minimum check-in age is 21',
          ],
        },
        travellingOrInternet: {
          travelling: {
            children: [],
            pets: [
              'Pets stay free (dogs and cats only)',
              'Restrictions apply*',
              '1 per room (up to 40 lbs)',
              'Food and water bowls available',
            ],
            extraPeople: [],
          },
          internet: ['Free WiFi in public areas', 'Free WiFi in rooms'],
        },
        transportAndOther: {
          transport: {
            transfers: [],
            parking: ['Secured onsite self parking (fees apply)'],
            offsiteTransfer: [],
          },
          otherInformation: ['Smoke-free property'],
          otherInclusions: [],
        },
      },
      amenities: [
        {
          heading: 'In the hotel',
          listItems: [
            {
              heading: 'Food and drink',
              listItems: [
                'Full breakfast daily (surcharge)',
                '2 bars/lounges',
                'Restaurant',
                'Coffee shop/café',
                'Room service (during limited hours)',
              ],
            },
            { heading: 'Things to do', listItems: ['Fitness facilities'] },
            {
              heading: 'Working away',
              listItems: ['Number of meeting rooms -  1'],
            },
            {
              heading: 'Services',
              listItems: [
                '24-hour front desk',
                'Concierge services',
                'Tours/ticket assistance',
                'Dry cleaning/laundry service',
                'Free newspapers in lobby',
                'Luggage storage',
                'Multilingual staff',
                'Porter/bellhop',
              ],
            },
            {
              heading: 'Facilities',
              listItems: [
                'Number of buildings/towers -  1',
                'Year Built -  1912',
                'Elevator',
                'ATM/banking',
                'Safe-deposit box at front desk',
                'Rooftop terrace',
              ],
            },
            {
              heading: 'Accessibility',
              listItems: [
                'Braille or raised signage',
                'Accessible bathroom',
                'In-room accessibility',
                'Roll-in shower',
              ],
            },
            {
              heading: 'Languages Spoken',
              listItems: [
                'Arabic',
                'English',
                'French',
                'Italian',
                'Polish',
                'Portuguese',
                'Russian',
                'Spanish',
              ],
            },
          ],
        },
        {
          heading: 'In the room',
          listItems: [
            {
              heading: 'Home comforts',
              listItems: [
                'Air conditioning',
                'Minibar',
                'Bathrobes',
                'Iron/ironing board',
              ],
            },
            {
              heading: 'Sleep well',
              listItems: [
                'Hypo-allergenic bedding available',
                'Down comforter',
                'Soundproofed rooms',
                'Premium bedding',
              ],
            },
            {
              heading: 'Things to enjoy',
              listItems: ['In-room massage available'],
            },
            {
              heading: 'Freshen up',
              listItems: [
                'Private bathroom',
                'Shower only',
                'Designer toiletries',
                'Hair dryer',
              ],
            },
            {
              heading: 'Be entertained',
              listItems: [
                '42-inch LCD TV',
                'Pay movies',
                'Premium TV channels',
                'IPod docking station',
              ],
            },
            {
              heading: 'Stay connected',
              listItems: ['Desk', 'Free newspaper', 'Free WiFi', 'Phone'],
            },
            {
              heading: 'Food and drink',
              listItems: ['Refrigerator (on request)'],
            },
            {
              heading: 'More',
              listItems: [
                'Daily housekeeping',
                'In-room safe (laptop compatible)',
                'Connecting/adjoining rooms available',
              ],
            },
          ],
        },
      ],
      hygieneAndCleanliness: {
        title: 'COVID-19: Hygiene and cleanliness',
        hygieneQualifications: {
          title: 'Official standards',
          qualifications: [
            'This property advises that it adheres to SafeStay (AHLA - USA) cleaning and disinfection practices. ',
          ],
        },
        healthAndSafetyMeasures: {
          title: 'Enhanced health and safety measures',
          description:
            'This property advises that enhanced cleaning and guest safety measures are currently in place.',
          measures: [
            'Property is cleaned with disinfectant',
            'Staff wears personal protective equipment',
            'Property confirms they are implementing enhanced cleaning measures',
            'Shield between guests and staff in main contact areas',
            'Social distancing measures are in place',
            'Contactless check-in is available',
            'Protective clothing is available to guests',
            'Masks are available to guests',
            'Gloves are available to guests',
            'Individually-wrapped food options are available',
            'Guests are provided with free hand sanitizer',
          ],
        },
      },
      smallPrint: {
        alternativeNames: [
          'Hotel Refinery',
          'Refinery Hotel',
          'Refinery Hotel New York',
          'Refinery New York',
          'Refinery',
          'Refinery Hotel Hotel',
          'Refinery Hotel New York',
          'Refinery Hotel Hotel New York',
        ],
        mandatoryFees: [
          '<p>Pet deposit: USD 150 per stay</p>',
          '<ul><li>Resort fee: USD 34.43 per accommodation, per night</li></ul><br/>\n<p>Resort fee inclusions: </p><ul><li>Health club access</li><li>Fitness center access</li><li>Internet access (may be limited)</li></ul>',
        ],
        optionalExtras: [
          '<p><strong>Secured self parking</strong> is available for an extra charge</p> ',
          '<p><strong>Rollaway</strong> beds are available for USD 50 per night</p>',
          '<p><strong>Breakfast</strong> costs between USD 20 and USD 30 per person (approximately)</p>',
        ],
        policies: [
          '<p>The property has connecting/adjoining rooms, which are subject to availability and can be requested by contacting the property using the number on the booking confirmation. </p><p>For details on pet restrictions, contact the property at the number on the booking confirmation. </p><p>This property advises that enhanced cleaning and guest safety measures are currently in place.</p><p>Disinfectant is used to clean the property; commonly-touched surfaces are cleaned with disinfectant between stays; bed sheets and towels are laundered at a temperature of at least 60°C/140°F.</p><p>Personal protective equipment, including masks and gloves, will be available to guests.</p><p>Social distancing measures are in place; staff at the property wear personal protective equipment; a shield is in place between staff and guests in main contact areas; periodic temperature checks are conducted on staff; guests are provided with hand sanitizer.</p><p>Contactless check-in and contactless check-out are available.</p><p>Individually-wrapped food options are available for breakfast, lunch, and dinner, and also through room service.</p><p>This property affirms that it adheres to the cleaning and disinfection practices of SafeStay (AHLA - USA).</p>',
          '<p>This property accepts credit cards. Cash is not accepted.</p>',
        ],
        mandatoryTaxesOrFees: true,
        display: true,
      },
      specialFeatures: {
        sections: [
          {
            heading: 'Dining',
            freeText:
              '<strong>Parker and Quinn</strong> - This restaurant specializes in American cuisine and serves breakfast, lunch, and dinner. Guests can enjoy drinks at the bar. <br/>\n<p></p><strong>Winnies</strong> - Onsite lobby lounge. Open daily. <br/>\n<p></p><strong>Rooftop Bar</strong> - This rooftop bar serves light fare only. Guests can enjoy alfresco dining (weather permitting). Open daily. ',
            listItems: [],
            subsections: [],
          },
          {
            heading: 'Awards and affiliations',
            freeText:
              'The property is a member of the Small Luxury Hotels of the World. ',
            listItems: [],
            subsections: [],
          },
        ],
      },
      miscellaneous: {
        pimmsAttributes: 'DoubleStamps|MESOTESTUS|D13|TESCO',
        showLegalInfoForStrikethroughPrices: true,
        legalInfoForStrikethroughPrices:
          'The struck-out price is based on the property’s standard rate on our app, as determined and supplied by the property.',
      },
      pageInfo: {
        pageType: 'dateless',
        errors: [
          {
            fieldName: 'arrivalDate',
            errorMessages: ['Specified arrival date is before today’s date.'],
          },
        ],
        errorKeys: ['MALFORMED_DATEFUL_REQUEST'],
      },
      hotelBadge: {
        type: 'vipBasic',
        label: 'VIP',
        tooltipTitle: 'VIP properties',
        tooltipText:
          'VIP properties have been recognized for offering exceptional service to our customers.',
      },
      unavailable: {},
    },
    common: {
      pointOfSale: { numberSeparators: ',.', brandName: 'Hotels.com' },
      tracking: {
        omniture: {
          's.prop34': '2021.12.923',
          's.eVar69': 'Mob :: aApp',
          's.currencyCode': 'USD',
          's.eVar26': 'US:AR:MALVERN:693',
          's.eVar16': 'Mob :: aApp',
          's.products': 'LOCAL;5558022',
          's.eVar29': 'Mob :: aApp',
          's.eVar40': 'D=v0',
          's.eVar95': 'Unknown',
          's.eVar41': 'USD',
          's.eVar31': 'D=v0',
          's.eVar4':
            '|SI:anonymous|VS:returnVisitor|HCR:notApplicable|FC:notApplicable|NS:unknown|TI:notApplicable|SM:notApplicable|IR:anonymous|',
          's.eVar43': 'en_US|HCOM_US|www.hotels.com',
          's.eVar32': 'D=v0',
          's.eVar34':
            'H1068:005.001,H1871:007.002,M4869:001.000,M4953:001.000,M5342:000.000,M5756:001.000,M5758:001.000,M5759:001.000,M5760:001.000,M6271:001.000,M6439:000.000,M6553:000.000,M6946:000.000,M7296:000.000,M7305:000.000,M7308:000.000,M7353:000.000,M7362.0,M7635:000.000,M7844:000.000,M7983:000.000,M7990:000.000,M8033:000.000,M8073:000.000,M8248:000.000,M8336:000.000,M8400:000.000,M9035:000.000,M9056:000.000,M9167:000.000,M9168:000.000,M9469:000.000,M9475:000.000,M9493:000.000,M9629:000.000,M9733:007.001,M9810:000.000,M9890:000.000,M9924:000.000,M9930:000.000,M9974:000.000,M10013:002.001,M10025:000.000,M10049:000.000,M10057:000.000,M10101:000.000,M10268:000.000,M10291:000.000,M10335:000.000,M10473:000.000,M10517:000.000,M9215:001.001',
          's.eVar13': '389367',
          's.server': 'www.hotels.com',
          's.prop28': '0',
          's.prop27': 'af1d8641-307d-4963-a9b1-7105d494269f',
          's.prop5': '389367',
          's.eVar80': '',
          's.prop48': 'hotel details without dates description tab',
          's.prop36':
            '|SI:anonymous|VS:returnVisitor|HCR:notApplicable|FC:notApplicable|NS:unknown|TI:notApplicable|SM:notApplicable|IR:anonymous|',
          's.eVar93': 'aws.us-east-1.unknown',
        },
        pageViewBeaconUrl:
          '/taps/v1/PageView?deviceType=App-Phone&rooms=1&destRegionID=1506246&hotelIds=&adults=1&userAgent=PDE.4.1.430&userGuid=af1d8641-307d-4963-a9b1-7105d494269f&pageName=Hotel-IS&slots=HIS_Car_A,HIS_Car_B,HIS_Car_C,HIS_Car_D,HIS_Car_E,HIS_Car_F,HIS_Car_G,HIS_Car_H,HIS_Car_I,HIS_Car_J&children=0&culture=en_US&testVersionOverride=4200.0,7983.0,7561.0,7990.0,8434.0,9493.0,10473.0&domain=www.hotels.com&action=pageview&publisher=expedia&userIP=47.214.232.165&programId=1',
      },
    },
  },
  transportation: {
    transportLocations: [
      {
        category: 'airport',
        locations: [
          {
            name: 'LaGuardia Airport (LGA) -',
            distance: '',
            distanceInTime: '13 min drive',
          },
          {
            name: 'John F. Kennedy International Airport (JFK) -',
            distance: '',
            distanceInTime: '20 min drive',
          },
          {
            name: 'Liberty Intl. Airport (EWR) -',
            distance: '',
            distanceInTime: '20 min drive',
          },
          {
            name: 'New York, NY (NYS-Skyports Seaplane Base) -',
            distance: '',
            distanceInTime: '3 min drive',
          },
          {
            name: 'Teterboro, NJ (TEB) -',
            distance: '',
            distanceInTime: '15 min drive',
          },
          {
            name: 'Linden, NJ (LDJ) -',
            distance: '',
            distanceInTime: '26 min drive',
          },
        ],
      },
      {
        category: 'train-station',
        locations: [
          {
            name: 'New York W 32nd St. Station -',
            distance: '',
            distanceInTime: '7 min walk',
          },
          {
            name: 'Grand Central - 42 St. Station -',
            distance: '',
            distanceInTime: '11 min walk',
          },
          {
            name: 'Penn Station -',
            distance: '',
            distanceInTime: '13 min walk',
          },
        ],
      },
      {
        category: 'metro',
        locations: [
          {
            name: '42 St. - Bryant Pk. Station -',
            distance: '',
            distanceInTime: '3 min walk',
          },
          {
            name: '34 St. Station (Herald Square) -',
            distance: '',
            distanceInTime: '5 min walk',
          },
          {
            name: 'Times Sq. - 42 St. Station -',
            distance: '',
            distanceInTime: '6 min walk',
          },
        ],
      },
    ],
  },
  neighborhood: { neighborhoodName: 'Manhattan' },
}
