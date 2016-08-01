'use strict';

/*eslint-disable quote-props*/
module.exports = {
  core: { // Core schemas
    'agency-option': './core/agency-option.json',
    'aws-units': './core/aws-units.json',
    'booking': './core/booking.json',
    'customer': './core/customer.json',
    'error': './core/error.json',
    'geolocation': './core/geolocation.json',
    'iot-thing-shadow': './core/iot-thing-shadow.json',
    'itinerary': './core/itinerary.json',
    'maas-package': './core/maas-package.json',
    'plan': './core/plan.json',
    'profile': './core/profile.json',
    'transport-service-provider': './core/transport-service-provider.json',
    'units': './core/units.json',
  },
  'maas-backend': { // Schemas for core MaaS-backend
    // Autocomplete query
    'autocomplete-query-request': './maas-backend/autocomplete/autocomplete-query/request.json',
    'autocomplete-query-response': './maas-backend/autocomplete/autocomplete-query/response.json',

    // Booking agency option
    'bookings-agency-options-request': './maas-backend/bookings/bookings-agency-options/request.json',
    'bookings-agency-options-response': './maas-backend/bookings/bookings-agency-options/response.json',

    // Booking create
    'bookings-create-request': './maas-backend/bookings/bookings-create/request.json',
    'bookings-create-response': './maas-backend/bookings/bookings-create/response.json',

    // Booking list
    'bookings-list-request': './maas-backend/bookings/bookings-list/request.json',
    'bookings-list-response': './maas-backend/bookings/bookings-list/response.json',

    // Booking retrieve
    'bookings-retrieve-request': './maas-backend/bookings/bookings-retrieve/request.json',
    'bookings-retrieve-response': './maas-backend/bookings/bookings-retrieve/response.json',

    // Booking update
    'bookings-update-request': './maas-backend/bookings/bookings-update/request.json',
    'bookings-update-response': './maas-backend/bookings/bookings-update/response.json',

    // Geocoding query
    'geocoding-query-request': './maas-backend/geocoding/geocoding-query/request.json',
    'geocoding-query-response': './maas-backend/geocoding/geocoding-query/response.json',

    // Geocoding reverse
    'geocoding-reverse-request': './maas-backend/geocoding/geocoding-reverse/request.json',
    'geocoding-reverse-response': './maas-backend/geocoding/geocoding-reverse/response.json',

    // Itinerary create
    'itineraries-create-request': './maas-backend/itineraries/itinerary-create/request.json',
    'itineraries-create-response': './maas-backend/itineraries/itinerary-create/response.json',

    // Itinerary retrieve
    'itineraries-retrieve-request': './maas-backend/itineraries/itinerary-retrieve/request.json',
    'itineraries-retrieve-response': './maas-backend/itineraries/itinerary-retrieve/response.json',

    // Itinerary update
    'itineraries-update-request': './maas-backend/itineraries/itinerary-update/request.json',
    'itineraries-update-response': './maas-backend/itineraries/itinerary-update/response.json',

    // Monitor query
    'monitor-query-request': './maas-backend/monitor/monitor-query/request.json',
    'monitor-query-response': './maas-backend/monitor/monitor-query/response.json',

    // Profile active plan put
    'profile-active-plan-put-request': './maas-backend/profile/profile-active-plan-put/request.json',
    'profile-active-plan-put-response': './maas-backend/profile/profile-active-plan-put/response.json',

    // Profile active route
    'profile-active-route-request': './maas-backend/profile/profile-active-route/request.json',
    'profile-active-route-response': './maas-backend/profile/profile-active-route/response.json',

    // Profile create
    'profile-create-request': './maas-backend/profile/profile-create/request.json',
    'profile-create-response': './maas-backend/profile/profile-create/response.json',

    // Profile devices
    'profile-devices-put-request': './maas-backend/profile/profile-devices-put/request.json',
    'profile-devices-put-response': './maas-backend/profile/profile-devices-put/response.json',

    // Profile edit
    'profile-edit-request': './maas-backend/profile/profile-edit/request.json',
    'profile-edit-response': './maas-backend/profile/profile-edit/response.json',

    // Profile favoriteLocations add
    'profile-favoriteLocations-add-request': './maas-backend/profile/profile-favoriteLocations-add/request.json',
    'profile-favoriteLocations-add-response': './maas-backend/profile/profile-favoriteLocations-add/response.json',

    // Profile favoriteLocations delete
    'profile-favoriteLocations-delete-request': './maas-backend/profile/profile-favoriteLocations-delete/request.json',
    'profile-favoriteLocations-delete-response': './maas-backend/profile/profile-favoriteLocations-delete/response.json',

    // Profile info
    'profile-info-request': './maas-backend/profile/profile-info/request.json',
    'profile-info-response': './maas-backend/profile/profile-info/response.json',

    // Profile payment get
    'profile-payment-get-request': './maas-backend/profile/profile-payment-get/request.json',
    'profile-payment-get-response': './maas-backend/profile/profile-payment-get/response.json',

    // Profile payment
    'profile-payment-put-request': './maas-backend/profile/profile-payment-put/request.json',
    'profile-payment-put-response': './maas-backend/profile/profile-payment-put/response.json',

    // Profile webhook
    'profile-webhook-request': './maas-backend/profile/profile-webhook/request.json',
    'profile-webhook-response': './maas-backend/profile/profile-webhook/response.json',

    // Digitransit routes
    'digitransit-routes-request': './maas-backend/provider/digitransit/routes/request.json',
    'digitransit-routes-response': './maas-backend/provider/digitransit/routes/response.json',

    // Google autocompele
    'google-autocomplete-request': './maas-backend/provider/google/autocompele/request.json',
    'google-autocomplete-response': './maas-backend/provider/google/autocompele/response.json',

    // Google geocoding
    'google-geocoding-request': './maas-backend/provider/google/geocoding/request.json',
    'google-geocoding-response': './maas-backend/provider/google/geocoding/response.json',

    // Google geocoding
    'google-geocoding-reverse-request': './maas-backend/provider/google/geocoding-reverse/request.json',
    'google-geocoding-reverse-response': './maas-backend/provider/google/geocoding-reverse/response.json',

    // Here geocoding
    'here-geocoding-request': './maas-backend/provider/here/geocoding/request.json',
    'here-geocoding-response': './maas-backend/provider/here/geocoding/response.json',

    // Here autocompele
    'here-autocompele-request': './maas-backend/provider/here/autocompele/request.json',
    'here-autocompele-response': './maas-backend/provider/here/autocompele/response.json',

    // Here locations request
    'here-locations-request': './maas-backend/provider/here/locations/request.json',
    'here-locations-response': './maas-backend/provider/here/locations/response.json',

    // Here routes request
    'here-routes-request': './maas-backend/provider/here/routes/request.json',
    'here-routes-response': './maas-backend/provider/here/routes/response.json',

    // HSL routes request
    'hsl-routes-request': './maas-backend/provider/hsl/routes/request.json',
    'hsl-routes-response': './maas-backend/provider/hsl/routes/response.json',

    // HSL simulator
    'hsl-simulator-request': './maas-backend/provider/hsl/simulator/request.json',
    'hsl-simulator-response': './maas-backend/provider/hsl/simulator/response.json',

    // HSL simulator navigate user routes
    'hsl-simulator-navigate-user-routes-request': './maas-backend/provider/hsl/simulator-navigate-user-routes/request.json',
    'hsl-simulator-navigate-user-routes-response': './maas-backend/provider/hsl/simulator-navigate-user-routes/response.json',

    // Matka routes
    'matka-routes-request': './maas-backend/provider/matka/routes/request.json',
    'matka-routes-response': './maas-backend/provider/matka/routes/response.json',

    // Tripgo routes
    'tripgo-routes-request': './maas-backend/provider/tripgo/routes/request.json',
    'tripgo-routes-response': './maas-backend/provider/tripgo/routes/response.json',

    // Tripgo regions
    'tripgo-regions-request': './maas-backend/provider/tripgo/regions/request.json',
    'tripgo-regions-response': './maas-backend/provider/tripgo/regions/response.json',

    // Twilio send sms
    'twilio-send-sms-request': './maas-backend/provider/twilio/send-sms/request.json',
    'twilio-send-sms-response': './maas-backend/provider/twilio/send-sms/response.json',

    // Push notification apple
    'push-notification-apple-request': './maas-backend/push-notification/push-notification-apple/request.json',
    'push-notification-apple-response': './maas-backend/push-notification/push-notification-apple/response.json',

    // Routes query
    'routes-query-request': './maas-backend/routes/routes-query/request.json',
    'routes-query-response': './maas-backend/routes/routes-query/response.json',

    // Tracking active itinerary get
    'tracking-active-itinerary-get-request': './maas-backend/tracking/tracking-active-itinerary-get/request.json',
    'tracking-active-itinerary-get-response': './maas-backend/tracking/tracking-active-itinerary-get/response.json',

    // Tracking active itinerary set
    'tracking-active-itinerary-set-request': './maas-backend/tracking/tracking-active-itinerary-set/request.json',
    'tracking-active-itinerary-set-response': './maas-backend/tracking/tracking-active-itinerary-set/response.json',

    // Tracking active leg get
    'tracking-active-leg-get-request': './maas-backend/tracking/tracking-active-leg-get/request.json',
    'tracking-active-leg-get-response': './maas-backend/tracking/tracking-active-leg-get/response.json',

    // Tracking active leg set
    'tracking-active-leg-set-request': './maas-backend/tracking/tracking-active-leg-set/request.json',
    'tracking-active-leg-set-response': './maas-backend/tracking/tracking-active-leg-set/response.json',

    // Tracking active itinerary cancel
    'tracking-cancel-active-itinerary-request': './maas-backend/tracking/tracking-cancel-active-itinerary/request.json',
    'tracking-cancel-active-itinerary-response': './maas-backend/tracking/tracking-cancel-active-itinerary/response.json',

    // Tracking update user location
    'tracking-update-user-location-request': './maas-backend/tracking/tracking-update-user-location/request.json',
    'tracking-update-user-location-response': './maas-backend/tracking/tracking-update-user-location/response.json',
  },
  'tsp': { // Schemas for TSP adapter
    // Booking cancel
    'booking-cancel-request': './tsp/booking-cancel/request.json',
    'booking-cancel-response': './tsp/booking-cancel/response.json',

    // Booking create
    'booking-create-request': './tsp/booking-create/request.json',
    'booking-create-response': './tsp/booking-create/response.json',

    // Booking options list req / res
    'booking-options-list-request': './tsp/booking-options-list/request.json',
    'booking-options-list-response': './tsp/booking-options-list/response.json',

    // Booking read by id
    'booking-read-by-id-request': './tsp/booking-read-by-id/request.json',
    'booking-read-by-id-response': './tsp/booking-read-by-id/response.json',

    // Booking option schema
    'booking-option': './tsp/booking-option.json',

    // Booking schema for a TSP adapter
    'booking': './tsp/booking.json',

    // Request customer
    'request-customer': './tsp/request-customer.json',
  },
};
/*eslint-enable quote-props*/
