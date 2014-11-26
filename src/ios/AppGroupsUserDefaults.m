#import "AppGroupsUserDefaults.h"
#import <Cordova/CDV.h>
#import <Cordova/CDVPluginResult.h>

@implementation AppGroupsUserDefaults

- (void) save:(CDVInvokedUrlCommand*)command
{
    // load the options
    NSDictionary* arguments = [command.arguments objectAtIndex:0];
    NSString* key = [arguments objectForKey:@"key"];
    NSString* key = [arguments objectForKey:@"value"];

    // do the magic

    // { magic }

    // give the callback
    //result = [CDVPluginResult resultWithStatus:CDVCommandStatus_IO_EXCEPTION];
    CDVPluginResult* result = nil;
    result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
