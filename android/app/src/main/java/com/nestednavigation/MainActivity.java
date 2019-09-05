// MainActivity.java
package com.nestednavigation;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate; // added
import com.facebook.react.ReactRootView; // added
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // added

public class MainActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "NestedNavigation";
    }

    // added
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}
