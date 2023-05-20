<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use Illuminate\Http\Request;

class FollowController extends Controller {
    /**
     * Follow a certain user
     *
     * @return void
     */
    public function follow(Request $request) {
        if (!$request->post()) {
            return redirect()->back();
        }

        $follow = new Follow([
            'user_id' => $request->user_id,
            'follower_id' => $request->user()->id
        ]);

        $follow->save();

        return redirect(route('chirps.index'));
    }


}
