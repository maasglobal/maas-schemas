'use strict';

/**
 *
 * Usage: Template check are done using regex
 *
 * Format: ${className}:${schemaId}
 * E.g: core:agency-option -> (core > agency-option)
 * E.g: maas-backend:autocomplete-query-request -> (maas-backend > autocomplete-query-request)
 */

/*eslint-disable quote-props*/
module.exports = {
  core: { // Core schemas
    'agency-option': './schemas/core/agency-option.json',
    'aws-units': './schemas/core/aws-units.json',
    'booking': './schemas/core/booking.json',
    'customer': './schemas/core/customer.json',
    'error': './schemas/core/error.json',
    'geolocation': './schemas/core/geolocation.json',
    'iot-thing-shadow': './schemas/core/iot-thing-shadow.json',
    'itinerary': './schemas/core/itinerary.json',
    'maas-package': './schemas/core/maas-package.json',
    'plan': './schemas/core/plan.json',
    'profile': './schemas/core/profile.json',
    'transport-service-provider': './schemas/core/transport-service-provider.json',
    'units': './schemas/core/units.json',
  },
  'maas-backend': { // Schemas for core MaaS-backend
    // Autocomplete query
    'autocomplete-query-request': './schemas/maas-backend/autocomplete/autocomplete-query/request.json',
    'autocomplete-query-response': './schemas/maas-backend/autocomplete/autocomplete-query/response.json',

    // Booking agency option
    'bookings-agency-options-request': './schemas/maas-backend/bookings/bookings-agency-options/request.json',
    'bookings-agency-options-response': './schemas/maas-backend/bookings/bookings-agency-options/response.json',

    // Booking create
    'bookings-create-request': './schemas/maas-backend/bookings/bookings-create/request.json',
    'bookings-create-response': './schemas/maas-backend/bookings/bookings-create/response.json',

    // Booking cancel
    'bookings-cancel-request': './schemas/maas-backend/bookings/bookings-cancel/request.json',
    'bookings-cancel-response': './schemas/maas-backend/bookings/bookings-cancel/response.json',

    // Booking list
    'bookings-list-request': './schemas/maas-backend/bookings/bookings-list/request.json',
    'bookings-list-response': './schemas/maas-backend/bookings/bookings-list/response.json',

    // Booking retrieve
    'bookings-retrieve-request': './schemas/maas-backend/bookings/bookings-retrieve/request.json',
    'bookings-retrieve-response': './schemas/maas-backend/bookings/bookings-retrieve/response.json',

    // Booking update
    'bookings-update-request': './schemas/maas-backend/bookings/bookings-update/request.json',
    'bookings-update-response': './schemas/maas-backend/bookings/bookings-update/response.json',

    // Geocoding query
    'geocoding-query-request': './schemas/maas-backend/geocoding/geocoding-query/request.json',
    'geocoding-query-response': './schemas/maas-backend/geocoding/geocoding-query/response.json',

    // Geocoding reverse
    'geocoding-reverse-request': './schemas/maas-backend/geocoding/geocoding-reverse/request.json',
    'geocoding-reverse-response': './schemas/maas-backend/geocoding/geocoding-reverse/response.json',

    // Itinerary create
    'itinerary-create-request': './schemas/maas-backend/itineraries/itinerary-create/request.json',
    'itinerary-create-response': './schemas/maas-backend/itineraries/itinerary-create/response.json',

    // Itinerary retrieve
    'itinerary-retrieve-request': './schemas/maas-backend/itineraries/itinerary-retrieve/request.json',
    'itinerary-retrieve-response': './schemas/maas-backend/itineraries/itinerary-retrieve/response.json',

    // Itinerary list
    'itinerary-list-request': './schemas/maas-backend/itineraries/itinerary-list/request.json',
    'itinerary-list-response': './schemas/maas-backend/itineraries/itinerary-list/response.json',

    // Itinerary update
    'itinerary-update-request': './schemas/maas-backend/itineraries/itinerary-update/request.json',
    'itinerary-update-response': './schemas/maas-backend/itineraries/itinerary-update/response.json',

    // Monitor query
    'monitor-query-request': './schemas/maas-backend/monitor/monitor-query/request.json',
    'monitor-query-response': './schemas/maas-backend/monitor/monitor-query/response.json',

    // Profile active plan put
    'profile-active-plan-put-request': './schemas/maas-backend/profile/profile-active-plan-put/request.json',
    'profile-active-plan-put-response': './schemas/maas-backend/profile/profile-active-plan-put/response.json',

    // Profile create
    'profile-create-request': './schemas/maas-backend/profile/profile-create/request.json',
    'profile-create-response': './schemas/maas-backend/profile/profile-create/response.json',

    // Profile devices
    'profile-devices-put-request': './schemas/maas-backend/profile/profile-devices-put/request.json',
    'profile-devices-put-response': './schemas/maas-backend/profile/profile-devices-put/response.json',

    // Profile edit
    'profile-edit-request': './schemas/maas-backend/profile/profile-edit/request.json',
    'profile-edit-response': './schemas/maas-backend/profile/profile-edit/response.json',

    // Profile favoriteLocations add
    'profile-favoriteLocations-add-request': './schemas/maas-backend/profile/profile-favoriteLocations-add/request.json',
    'profile-favoriteLocations-add-response': './schemas/maas-backend/profile/profile-favoriteLocations-add/response.json',

    // Profile favoriteLocations delete
    'profile-favoriteLocations-delete-request': './schemas/maas-backend/profile/profile-favoriteLocations-delete/request.json',
    'profile-favoriteLocations-delete-response': './schemas/maas-backend/profile/profile-favoriteLocations-delete/response.json',

    // Profile info
    'profile-info-request': './schemas/maas-backend/profile/profile-info/request.json',
    'profile-info-response': './schemas/maas-backend/profile/profile-info/response.json',

    // Profile payment get
    'profile-payment-get-request': './schemas/maas-backend/profile/profile-payment-get/request.json',
    'profile-payment-get-response': './schemas/maas-backend/profile/profile-payment-get/response.json',

    // Profile payment put
    'profile-payment-put-request': './schemas/maas-backend/profile/profile-payment-put/request.json',
    'profile-payment-put-response': './schemas/maas-backend/profile/profile-payment-put/response.json',

    // Profile webhook
    'profile-webhook-request': './schemas/maas-backend/profile/profile-webhook/request.json',
    'profile-webhook-response': './schemas/maas-backend/profile/profile-webhook/response.json',

    // Digitransit routes
    'digitransit-routes-request': './schemas/maas-backend/provider/digitransit/routes/request.json',
    'digitransit-routes-response': './schemas/maas-backend/provider/digitransit/routes/response.json',

    // Google autocompele
    'google-autocomplete-request': './schemas/maas-backend/provider/google/autocompele/request.json',
    'google-autocomplete-response': './schemas/maas-backend/provider/google/autocompele/response.json',

    // Google geocoding
    'google-geocoding-request': './schemas/maas-backend/provider/google/geocoding/request.json',
    'google-geocoding-response': './schemas/maas-backend/provider/google/geocoding/response.json',

    // Google reverse geocoding
    'google-geocoding-reverse-request': './schemas/maas-backend/provider/google/geocoding-reverse/request.json',
    'google-geocoding-reverse-response': './schemas/maas-backend/provider/google/geocoding-reverse/response.json',

    // Here geocoding
    'here-geocoding-request': './schemas/maas-backend/provider/here/geocoding/request.json',
    'here-geocoding-response': './schemas/maas-backend/provider/here/geocoding/response.json',

    // Here autocompele
    'here-autocompele-request': './schemas/maas-backend/provider/here/autocompele/request.json',
    'here-autocompele-response': './schemas/maas-backend/provider/here/autocompele/response.json',

    // Here locations request
    'here-locations-request': './schemas/maas-backend/provider/here/locations/request.json',
    'here-locations-response': './schemas/maas-backend/provider/here/locations/response.json',

    // Here routes request
    'here-routes-request': './schemas/maas-backend/provider/here/routes/request.json',
    'here-routes-response': './schemas/maas-backend/provider/here/routes/response.json',

    // HSL routes request
    'hsl-routes-request': './schemas/maas-backend/provider/hsl/routes/request.json',
    'hsl-routes-response': './schemas/maas-backend/provider/hsl/routes/response.json',

    // HSL simulator
    'hsl-simulator-request': './schemas/maas-backend/provider/hsl/simulator/request.json',
    'hsl-simulator-response': './schemas/maas-backend/provider/hsl/simulator/response.json',

    // HSL simulator navigate user routes
    'hsl-simulator-navigate-user-routes-request': './schemas/maas-backend/provider/hsl/simulator-navigate-user-routes/request.json',
    'hsl-simulator-navigate-user-routes-response': './schemas/maas-backend/provider/hsl/simulator-navigate-user-routes/response.json',

    // Matka routes
    'matka-routes-request': './schemas/maas-backend/provider/matka/routes/request.json',
    'matka-routes-response': './schemas/maas-backend/provider/matka/routes/response.json',

    // Tripgo routes
    'tripgo-routes-request': './schemas/maas-backend/provider/tripgo/routes/request.json',
    'tripgo-routes-response': './schemas/maas-backend/provider/tripgo/routes/response.json',

    // Tripgo regions
    'tripgo-regions-request': './schemas/maas-backend/provider/tripgo/regions/request.json',
    'tripgo-regions-response': './schemas/maas-backend/provider/tripgo/regions/response.json',

    // Twilio send sms
    'twilio-send-sms-request': './schemas/maas-backend/provider/twilio/send-sms/request.json',
    'twilio-send-sms-response': './schemas/maas-backend/provider/twilio/send-sms/response.json',

    // Push notification apple
    'push-notification-apple-request': './schemas/maas-backend/push-notification/push-notification-apple/request.json',
    'push-notification-apple-response': './schemas/maas-backend/push-notification/push-notification-apple/response.json',

    // Routes query
    'routes-query-request': './schemas/maas-backend/routes/routes-query/request.json',
    'routes-query-response': './schemas/maas-backend/routes/routes-query/response.json',

    // Tracking active itinerary get
    'tracking-active-itinerary-get-request': './schemas/maas-backend/tracking/tracking-active-itinerary-get/request.json',
    'tracking-active-itinerary-get-response': './schemas/maas-backend/tracking/tracking-active-itinerary-get/response.json',

    // Tracking active itinerary set
    'tracking-active-itinerary-set-request': './schemas/maas-backend/tracking/tracking-active-itinerary-set/request.json',
    'tracking-active-itinerary-set-response': './schemas/maas-backend/tracking/tracking-active-itinerary-set/response.json',

    // Tracking active leg get
    'tracking-active-leg-get-request': './schemas/maas-backend/tracking/tracking-active-leg-get/request.json',
    'tracking-active-leg-get-response': './schemas/maas-backend/tracking/tracking-active-leg-get/response.json',

    // Tracking active leg set
    'tracking-active-leg-set-request': './schemas/maas-backend/tracking/tracking-active-leg-set/request.json',
    'tracking-active-leg-set-response': './schemas/maas-backend/tracking/tracking-active-leg-set/response.json',

    // Tracking active itinerary cancel
    'tracking-active-itinerary-cancel-request': './schemas/maas-backend/tracking/tracking-cancel-active-itinerary/request.json',
    'tracking-active-itinerary-cancel-response': './schemas/maas-backend/tracking/tracking-cancel-active-itinerary/response.json',

    // Tracking update user location
    'tracking-update-user-location-request': './schemas/maas-backend/tracking/tracking-update-user-location/request.json',
    'tracking-update-user-location-response': './schemas/maas-backend/tracking/tracking-update-user-location/response.json',
  },
  'tsp': { // Schemas for TSP adapter
    // Booking cancel
    'booking-cancel-request': './schemas/tsp/booking-cancel/request.json',
    'booking-cancel-response': './schemas/tsp/booking-cancel/response.json',

    // Booking create
    'booking-create-request': './schemas/tsp/booking-create/request.json',
    'booking-create-response': './schemas/tsp/booking-create/response.json',

    // Booking options list req / res
    'booking-options-list-request': './schemas/tsp/booking-options-list/request.json',
    'booking-options-list-response': './schemas/tsp/booking-options-list/response.json',

    // Booking read by id
    'booking-read-by-id-request': './schemas/tsp/booking-read-by-id/request.json',
    'booking-read-by-id-response': './schemas/tsp/booking-read-by-id/response.json',

    // Booking option schema
    'booking-option': './schemas/tsp/booking-option.json',

    // Booking schema for a TSP adapter
    'booking': './schemas/tsp/booking.json',

    // Request customer
    'request-customer': './schemas/tsp/request-customer.json',
  },
};
/*eslint-enable quote-props*/
