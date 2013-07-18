'use strict';

/* jasmine specs for services go here */

describe('service', function() {
	var kinvey, $http, $httpBackend;

	angular.module('test', []).constant('SERVICE_URL', 'bob');

	beforeEach(module('test', 'rampage.services'));

	beforeEach(inject(function(_kinvey_, _$http_, _$httpBackend_) {
		kinvey = _kinvey_;
		$http = _$http_;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('version', function() {
		it('should return current version', inject(function(version) {
			expect(version).toEqual('0.1');
		}));
	});

	describe('kinvey service tests', function() {

		describe('ping test', function() {
			it('sends an http request to kinvey', inject(function(SERVICE_URL) {
				$httpBackend.when('GET', SERVICE_URL).respond(200, {});
				$httpBackend.expect('GET', SERVICE_URL);
				kinvey.ping();
				$httpBackend.flush();
			}));
		});
		
		describe('getData service test', function() {
			
			it('sends an http get request to kinvey', inject(function(SERVICE_URL) {
				var url = SERVICE_URL + '/Task';
				$httpBackend.when('GET', url).respond(200, {});
				$httpBackend.expect('GET', url);
				kinvey.getData();
				$httpBackend.flush();
			}));
		});
		describe('addData service test', function() {
			
			it('sends an http POST request to kinvey', inject(function(SERVICE_URL) {
				var url = SERVICE_URL + '/Task';
				$httpBackend.when('POST', url).respond(200, {});
				$httpBackend.expect('POST', url);
				kinvey.addData();
				$httpBackend.flush();
			}));
		});
	});
});
