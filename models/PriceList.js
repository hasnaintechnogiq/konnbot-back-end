const mongoose = require('mongoose');

const pricelistSchema = mongoose.Schema({

     JCBCost : Number,
     trollycost : Number,
     chunaCost : Number,
     RopeCost : Number,
     StoneAggregateCost : Number,
     PortlandCementCost : Number,
     CoursesandCost : Number,
     PlasticizerSuperPlasticizerCost : Number,
     ReinforcementCost : Number,
     BindingWireCost : Number,
     coverBlockCost : Number,
     SixinchpipCost : Number,
     PtrapCost : Number,
     SolventCost : Number,
     NahaniTrapCost : Number,
     NintyDegreeCost : Number,
     JunctionCost : Number,
     KopraCost : Number,
     AntiTermitechemicalCost : Number,
     AACBlocksCost : Number,
     AdhesiveCost : Number,
     CommonBurntClayCost : Number,
     GraniteCost : Number,
     modifiedcementationcoatingCost : Number,
     PolymermodifiedcementationcoatingCost : Number,
     FibreglassclothCost : Number,
     BrickbatCost : Number,
     IntegralcrystallineslurryCost : Number,
     cementCost : Number,
     SandCost : Number,
     GypsumPlasterCost : Number,
     KotastoneCost : Number,
     PigmentCost : Number,
     MarbleStoneCost : Number,
     CeramictilesCost : Number,
     EpoxyGroutCost : Number,
     TilesCost : Number,
     PuttyTwommCost : Number,
     WallcareputtyCost : Number,
     PrimerCost : Number,
     DryDistemperoilboundCost : Number,
     WaterproofingCementCost : Number,
     TextureCost : Number,
     AcrylicexteriorpaintCost : Number,
     PremiumacrylicemulsionofinteriorCost : Number,
     PaintCost : Number,
     AcrylicemulsionCost : Number,
     PlasticemulsionCost : Number

});


module.exports = mongoose.model("pricelist", pricelistSchema);