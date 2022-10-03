// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      export /**
       * Encodes whether a FinancialAccount has access to a particular Feature, with a `status` enum and associated `status_details`.
       * Stripe or the platform can control Features via the requested field.
       */
      interface FinancialAccountFeatures {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.financial_account_features';

        /**
         * Toggle settings for enabling/disabling a feature
         */
        card_issuing?: FinancialAccountFeatures.CardIssuing;

        /**
         * Toggle settings for enabling/disabling a feature
         */
        deposit_insurance?: FinancialAccountFeatures.DepositInsurance;

        /**
         * Settings related to Financial Addresses features on a Financial Account
         */
        financial_addresses?: FinancialAccountFeatures.FinancialAddresses;

        /**
         * InboundTransfers contains inbound transfers features for a FinancialAccount.
         */
        inbound_transfers?: FinancialAccountFeatures.InboundTransfers;

        /**
         * Toggle settings for enabling/disabling a feature
         */
        intra_stripe_flows?: FinancialAccountFeatures.IntraStripeFlows;

        /**
         * Settings related to Outbound Payments features on a Financial Account
         */
        outbound_payments?: FinancialAccountFeatures.OutboundPayments;

        /**
         * OutboundTransfers contains outbound transfers features for a FinancialAccount.
         */
        outbound_transfers?: FinancialAccountFeatures.OutboundTransfers;
      }

      namespace FinancialAccountFeatures {
        export interface CardIssuing {
          /**
           * Whether the FinancialAccount should have the Feature.
           */
          requested: boolean;

          /**
           * Whether the Feature is operational.
           */
          status: CardIssuing.Status;

          /**
           * Additional details; includes at least one entry when the status is not `active`.
           */
          status_details: Array<CardIssuing.StatusDetail>;
        }

        export interface DepositInsurance {
          /**
           * Whether the FinancialAccount should have the Feature.
           */
          requested: boolean;

          /**
           * Whether the Feature is operational.
           */
          status: DepositInsurance.Status;

          /**
           * Additional details; includes at least one entry when the status is not `active`.
           */
          status_details: Array<DepositInsurance.StatusDetail>;
        }

        export interface FinancialAddresses {
          /**
           * Toggle settings for enabling/disabling a feature
           */
          aba?: FinancialAddresses.Aba;
        }

        export interface InboundTransfers {
          /**
           * Toggle settings for enabling/disabling a feature
           */
          ach?: InboundTransfers.Ach;
        }

        export interface IntraStripeFlows {
          /**
           * Whether the FinancialAccount should have the Feature.
           */
          requested: boolean;

          /**
           * Whether the Feature is operational.
           */
          status: IntraStripeFlows.Status;

          /**
           * Additional details; includes at least one entry when the status is not `active`.
           */
          status_details: Array<IntraStripeFlows.StatusDetail>;
        }

        export interface OutboundPayments {
          /**
           * Toggle settings for enabling/disabling a feature
           */
          ach?: OutboundPayments.Ach;

          /**
           * Toggle settings for enabling/disabling a feature
           */
          us_domestic_wire?: OutboundPayments.UsDomesticWire;
        }

        export interface OutboundTransfers {
          /**
           * Toggle settings for enabling/disabling a feature
           */
          ach?: OutboundTransfers.Ach;

          /**
           * Toggle settings for enabling/disabling a feature
           */
          us_domestic_wire?: OutboundTransfers.UsDomesticWire;
        }

        namespace CardIssuing {
          export type Status = 'active' | 'pending' | 'restricted';

          export interface StatusDetail {
            /**
             * Represents the reason why the status is `pending` or `restricted`.
             */
            code: StatusDetail.Code;

            /**
             * Represents what the user should do, if anything, to activate the Feature.
             */
            resolution: StatusDetail.Resolution | null;

            /**
             * The `platform_restrictions` that are restricting this Feature.
             */
            restriction?: StatusDetail.Restriction;
          }

          namespace StatusDetail {
            export type Code =
              | 'activating'
              | 'capability_not_requested'
              | 'financial_account_closed'
              | 'rejected_other'
              | 'rejected_unsupported_business'
              | 'requirements_past_due'
              | 'requirements_pending_verification'
              | 'restricted_by_platform'
              | 'restricted_other';

            export type Resolution =
              | 'contact_stripe'
              | 'provide_information'
              | 'remove_restriction';

            export type Restriction = 'inbound_flows' | 'outbound_flows';
          }
        }

        namespace DepositInsurance {
          export type Status = 'active' | 'pending' | 'restricted';

          export interface StatusDetail {
            /**
             * Represents the reason why the status is `pending` or `restricted`.
             */
            code: StatusDetail.Code;

            /**
             * Represents what the user should do, if anything, to activate the Feature.
             */
            resolution: StatusDetail.Resolution | null;

            /**
             * The `platform_restrictions` that are restricting this Feature.
             */
            restriction?: StatusDetail.Restriction;
          }

          namespace StatusDetail {
            export type Code =
              | 'activating'
              | 'capability_not_requested'
              | 'financial_account_closed'
              | 'rejected_other'
              | 'rejected_unsupported_business'
              | 'requirements_past_due'
              | 'requirements_pending_verification'
              | 'restricted_by_platform'
              | 'restricted_other';

            export type Resolution =
              | 'contact_stripe'
              | 'provide_information'
              | 'remove_restriction';

            export type Restriction = 'inbound_flows' | 'outbound_flows';
          }
        }

        namespace FinancialAddresses {
          export interface Aba {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;

            /**
             * Whether the Feature is operational.
             */
            status: Aba.Status;

            /**
             * Additional details; includes at least one entry when the status is not `active`.
             */
            status_details: Array<Aba.StatusDetail>;
          }

          namespace Aba {
            export type Status = 'active' | 'pending' | 'restricted';

            export interface StatusDetail {
              /**
               * Represents the reason why the status is `pending` or `restricted`.
               */
              code: StatusDetail.Code;

              /**
               * Represents what the user should do, if anything, to activate the Feature.
               */
              resolution: StatusDetail.Resolution | null;

              /**
               * The `platform_restrictions` that are restricting this Feature.
               */
              restriction?: StatusDetail.Restriction;
            }

            namespace StatusDetail {
              export type Code =
                | 'activating'
                | 'capability_not_requested'
                | 'financial_account_closed'
                | 'rejected_other'
                | 'rejected_unsupported_business'
                | 'requirements_past_due'
                | 'requirements_pending_verification'
                | 'restricted_by_platform'
                | 'restricted_other';

              export type Resolution =
                | 'contact_stripe'
                | 'provide_information'
                | 'remove_restriction';

              export type Restriction = 'inbound_flows' | 'outbound_flows';
            }
          }
        }

        namespace InboundTransfers {
          export interface Ach {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;

            /**
             * Whether the Feature is operational.
             */
            status: Ach.Status;

            /**
             * Additional details; includes at least one entry when the status is not `active`.
             */
            status_details: Array<Ach.StatusDetail>;
          }

          namespace Ach {
            export type Status = 'active' | 'pending' | 'restricted';

            export interface StatusDetail {
              /**
               * Represents the reason why the status is `pending` or `restricted`.
               */
              code: StatusDetail.Code;

              /**
               * Represents what the user should do, if anything, to activate the Feature.
               */
              resolution: StatusDetail.Resolution | null;

              /**
               * The `platform_restrictions` that are restricting this Feature.
               */
              restriction?: StatusDetail.Restriction;
            }

            namespace StatusDetail {
              export type Code =
                | 'activating'
                | 'capability_not_requested'
                | 'financial_account_closed'
                | 'rejected_other'
                | 'rejected_unsupported_business'
                | 'requirements_past_due'
                | 'requirements_pending_verification'
                | 'restricted_by_platform'
                | 'restricted_other';

              export type Resolution =
                | 'contact_stripe'
                | 'provide_information'
                | 'remove_restriction';

              export type Restriction = 'inbound_flows' | 'outbound_flows';
            }
          }
        }

        namespace IntraStripeFlows {
          export type Status = 'active' | 'pending' | 'restricted';

          export interface StatusDetail {
            /**
             * Represents the reason why the status is `pending` or `restricted`.
             */
            code: StatusDetail.Code;

            /**
             * Represents what the user should do, if anything, to activate the Feature.
             */
            resolution: StatusDetail.Resolution | null;

            /**
             * The `platform_restrictions` that are restricting this Feature.
             */
            restriction?: StatusDetail.Restriction;
          }

          namespace StatusDetail {
            export type Code =
              | 'activating'
              | 'capability_not_requested'
              | 'financial_account_closed'
              | 'rejected_other'
              | 'rejected_unsupported_business'
              | 'requirements_past_due'
              | 'requirements_pending_verification'
              | 'restricted_by_platform'
              | 'restricted_other';

            export type Resolution =
              | 'contact_stripe'
              | 'provide_information'
              | 'remove_restriction';

            export type Restriction = 'inbound_flows' | 'outbound_flows';
          }
        }

        namespace OutboundPayments {
          export interface Ach {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;

            /**
             * Whether the Feature is operational.
             */
            status: Ach.Status;

            /**
             * Additional details; includes at least one entry when the status is not `active`.
             */
            status_details: Array<Ach.StatusDetail>;
          }

          export interface UsDomesticWire {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;

            /**
             * Whether the Feature is operational.
             */
            status: UsDomesticWire.Status;

            /**
             * Additional details; includes at least one entry when the status is not `active`.
             */
            status_details: Array<UsDomesticWire.StatusDetail>;
          }

          namespace Ach {
            export type Status = 'active' | 'pending' | 'restricted';

            export interface StatusDetail {
              /**
               * Represents the reason why the status is `pending` or `restricted`.
               */
              code: StatusDetail.Code;

              /**
               * Represents what the user should do, if anything, to activate the Feature.
               */
              resolution: StatusDetail.Resolution | null;

              /**
               * The `platform_restrictions` that are restricting this Feature.
               */
              restriction?: StatusDetail.Restriction;
            }

            namespace StatusDetail {
              export type Code =
                | 'activating'
                | 'capability_not_requested'
                | 'financial_account_closed'
                | 'rejected_other'
                | 'rejected_unsupported_business'
                | 'requirements_past_due'
                | 'requirements_pending_verification'
                | 'restricted_by_platform'
                | 'restricted_other';

              export type Resolution =
                | 'contact_stripe'
                | 'provide_information'
                | 'remove_restriction';

              export type Restriction = 'inbound_flows' | 'outbound_flows';
            }
          }

          namespace UsDomesticWire {
            export type Status = 'active' | 'pending' | 'restricted';

            export interface StatusDetail {
              /**
               * Represents the reason why the status is `pending` or `restricted`.
               */
              code: StatusDetail.Code;

              /**
               * Represents what the user should do, if anything, to activate the Feature.
               */
              resolution: StatusDetail.Resolution | null;

              /**
               * The `platform_restrictions` that are restricting this Feature.
               */
              restriction?: StatusDetail.Restriction;
            }

            namespace StatusDetail {
              export type Code =
                | 'activating'
                | 'capability_not_requested'
                | 'financial_account_closed'
                | 'rejected_other'
                | 'rejected_unsupported_business'
                | 'requirements_past_due'
                | 'requirements_pending_verification'
                | 'restricted_by_platform'
                | 'restricted_other';

              export type Resolution =
                | 'contact_stripe'
                | 'provide_information'
                | 'remove_restriction';

              export type Restriction = 'inbound_flows' | 'outbound_flows';
            }
          }
        }

        namespace OutboundTransfers {
          export interface Ach {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;

            /**
             * Whether the Feature is operational.
             */
            status: Ach.Status;

            /**
             * Additional details; includes at least one entry when the status is not `active`.
             */
            status_details: Array<Ach.StatusDetail>;
          }

          export interface UsDomesticWire {
            /**
             * Whether the FinancialAccount should have the Feature.
             */
            requested: boolean;

            /**
             * Whether the Feature is operational.
             */
            status: UsDomesticWire.Status;

            /**
             * Additional details; includes at least one entry when the status is not `active`.
             */
            status_details: Array<UsDomesticWire.StatusDetail>;
          }

          namespace Ach {
            export type Status = 'active' | 'pending' | 'restricted';

            export interface StatusDetail {
              /**
               * Represents the reason why the status is `pending` or `restricted`.
               */
              code: StatusDetail.Code;

              /**
               * Represents what the user should do, if anything, to activate the Feature.
               */
              resolution: StatusDetail.Resolution | null;

              /**
               * The `platform_restrictions` that are restricting this Feature.
               */
              restriction?: StatusDetail.Restriction;
            }

            namespace StatusDetail {
              export type Code =
                | 'activating'
                | 'capability_not_requested'
                | 'financial_account_closed'
                | 'rejected_other'
                | 'rejected_unsupported_business'
                | 'requirements_past_due'
                | 'requirements_pending_verification'
                | 'restricted_by_platform'
                | 'restricted_other';

              export type Resolution =
                | 'contact_stripe'
                | 'provide_information'
                | 'remove_restriction';

              export type Restriction = 'inbound_flows' | 'outbound_flows';
            }
          }

          namespace UsDomesticWire {
            export type Status = 'active' | 'pending' | 'restricted';

            export interface StatusDetail {
              /**
               * Represents the reason why the status is `pending` or `restricted`.
               */
              code: StatusDetail.Code;

              /**
               * Represents what the user should do, if anything, to activate the Feature.
               */
              resolution: StatusDetail.Resolution | null;

              /**
               * The `platform_restrictions` that are restricting this Feature.
               */
              restriction?: StatusDetail.Restriction;
            }

            namespace StatusDetail {
              export type Code =
                | 'activating'
                | 'capability_not_requested'
                | 'financial_account_closed'
                | 'rejected_other'
                | 'rejected_unsupported_business'
                | 'requirements_past_due'
                | 'requirements_pending_verification'
                | 'restricted_by_platform'
                | 'restricted_other';

              export type Resolution =
                | 'contact_stripe'
                | 'provide_information'
                | 'remove_restriction';

              export type Restriction = 'inbound_flows' | 'outbound_flows';
            }
          }
        }
      }
    }
  }
}
