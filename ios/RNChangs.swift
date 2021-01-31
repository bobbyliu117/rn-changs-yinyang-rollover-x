//
//  RNChangs.swift
//  RNChangs
//
//  Copyright © 2021 Chang Liu. All rights reserved.
//

import Foundation

@objc(RNChangs)
class RNChangs: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
