/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed should has a url defined', function () {
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url).not.toBe('');
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed should has a name defined', function () {
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name).not.toBe('');
            });
        });
    });


    /* This suite is all about the left menu visibility*/
    describe('The menu', function () {

        /* This tests to make sure that the menu element is
         * hidden by default.
         */
        it('should be hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This tests to make sure the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should changes visibility when the menu icon is clicked', function () {
            let menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        /*A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single entry element within the feed container.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('should be loaded', function (done) {
            loadFeed(0, done);
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let prevFeed;
        let newFeed;
        beforeEach(function (done) {

            loadFeed(0, function () {

                // feed 0 done loading

                prevFeed = $('.feed').html();

                loadFeed(1, function () {

                    // feed 1 done loading

                    newFeed = $('.feed').html();

                    done();

                });
            });

        });

        it('should has the content actually changes', function (done) {
            expect(prevFeed).not.toEqual(newFeed);
            done();
        });
    });



}());
