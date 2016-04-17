overwolf.logitech.led.init(function(info)
{
    console.log("Initialized: " + info.status)
});

function flashDevices()
{
    overwolf.logitech.led.flashLighting(30, 50, 90, 3000, 200, function(info)
    {
        console.log("Flash: " + info.result)
    });
}

function gamingKeyboard()
{
    overwolf.logitech.led.setLightingForKeyWithKeyName(overwolf.logitech.led.enums.KeyboardNames.W, 100, 0, 0,
        function(info)
        {
            console.log("Light W: " + info.status)
        });
    overwolf.logitech.led.setLightingForKeyWithKeyName(overwolf.logitech.led.enums.KeyboardNames.A, 100, 0, 0,
        function(info)
        {
            console.log("Light A: " + info.status)
        });
    overwolf.logitech.led.setLightingForKeyWithKeyName(overwolf.logitech.led.enums.KeyboardNames.S, 100, 0, 0,
        function(info)
        {
            console.log("Light S: " + info.status)
        });
    overwolf.logitech.led.setLightingForKeyWithKeyName(overwolf.logitech.led.enums.KeyboardNames.D, 100, 0, 0,
        function(info)
        {
            console.log("Light D: " + info.status)
        });
}

function showImage()
{
    overwolf.logitech.led.setLightingFromBitmap("img.png", function(info)
    {
        console.log(info)
    });
}