/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from "ethers";
import {Listener, Provider} from "ethers/providers";
import {Arrayish, BigNumber, BigNumberish, Interface} from "ethers/utils";
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from ".";

interface ReentryProtectionInterface extends Interface {
  functions: {
    rpSlot: TypedFunctionDescription<{encode([]: []): string}>;
  };

  events: {};
}

export class ReentryProtection extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ReentryProtection;
  attach(addressOrName: string): ReentryProtection;
  deployed(): Promise<ReentryProtection>;

  on(event: EventFilter | string, listener: Listener): ReentryProtection;
  once(event: EventFilter | string, listener: Listener): ReentryProtection;
  addListener(eventName: EventFilter | string, listener: Listener): ReentryProtection;
  removeAllListeners(eventName: EventFilter | string): ReentryProtection;
  removeListener(eventName: any, listener: Listener): ReentryProtection;

  interface: ReentryProtectionInterface;

  functions: {
    rpSlot(): Promise<string>;
  };

  rpSlot(): Promise<string>;

  filters: {};

  estimate: {
    rpSlot(): Promise<BigNumber>;
  };
}
