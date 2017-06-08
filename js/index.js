(function() {
	$(function() {
		var now = moment.now(),
			timeZones = moment.tz.names(),
        	$unixTimestamp = $('#timestamp'),
	        $convertedTimeLocal = $('#localTime'),
	        $convertedTimeGMT = $('#gmtTime'),
	        $selectedZoneTime = $('#selectedTimeZoneTime'),
	        $timezoneList = $('#timezoneList');


    	for (var i = timeZones.length - 1; i >= 0; i--) {
		    $timezoneList.append('<option value="' + timeZones[i] + '">' + timeZones[i] + '</option>');
    	}

		$unixTimestamp.keypress(function(e) {
			// e.preventDefault();
			if (e.which == 13) {
				convertAndSet($unixTimestamp.val());
			}
		});

		$timezoneList.change(function(e) {
			convertAndSet($unixTimestamp.val());
		});


		var convertAndSet = function(timestamp) {
			var utc = moment.utc(Number(timestamp));
			$convertedTimeGMT.text(utc);
			$convertedTimeLocal.text(utc.toDate());
			$selectedZoneTime.text(moment.tz(Number(timestamp), $timezoneList.val()));
		};

		// start at now
		$unixTimestamp.val(now);
		convertAndSet(now);
	});
})();