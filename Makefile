build:
	cd service-api && $(MAKE) build
	cd service-controller && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down

test:
	cd service-api && $(MAKE) test
	cd service-controller && $(MAKE) test